const router = require('express').Router()
const {getAdmin,setAdmin,hasAdmin}=require('../../data/adminTable')
const {encode}=require('../../utils/jwt')
const {decrypt}=require('../../utils/crypto')

router.post('/login', (req, res) => {
    let { username, password } = req.body
    username=decrypt(username)
    password=decrypt(password)
    if(!hasAdmin(username)){
        res.send({
            code: 401,
            data: null,
            msg: '无效账号'
        })
    }
    if (getAdmin(username).password !== password) {
        res.send({
            code: 401,
            data: null,
            msg: '密码错误'
        })
    }
    const token=encode(username)
    res.send({
        code: 200,
        msg: '登陆成功',
        data: {
            token
        }
    })
})



module.exports = router