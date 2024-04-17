require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router')
const { decode } = require('./utils/jwt')

app.set('trust proxy', true)

app.use(express.json())


// 跨域
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Token');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// 鉴权
const authToken = (req, res, next) => {
  let token = req.headers.token
  if (!decode(token)) {
    return res.send({
      code: 401,
      status: false,
      message: '请先登录'
    })
  }
  next()
}

app.use('/login', router.login)
app.use('/register',authToken, router.register)
app.use('/auth', authToken, router.auth)
app.use('/weather', authToken, router.weather)
app.use('/table', authToken, router.table)


app.use('/', (req, res) => {
  res.status(404)
  res.send({
    code: 404,
    message: '未找到该资源路径'
  })
})

const PORT = 9999
app.listen(PORT, () => {
  console.log('服务器启动了，端口为：', PORT)
})
