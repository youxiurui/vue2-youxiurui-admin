require('dotenv').config()
const express = require('express')
const app=express()
const router=require('./router')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if ('OPTIONS' === req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  });

app.use(express.json())
app.use('/auth',router.auth)
app.use('/weather',router.weather)


app.use('/',(req,res)=>{
    res.status(404)
    res.send({
        code:404,
        message:'未找到该资源路径'
    })
})

const PORT=9999
app.listen(PORT,()=>{
    console.log('服务器启动了，端口为：',PORT)
})
