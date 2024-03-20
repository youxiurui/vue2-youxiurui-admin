const router = require('express').Router()
const {getAdmin,setAdmin,hasAdmin}=require('../../data/adminTable')
const {encrypt,decode}=require('../../utils/jwt')

router.post('/login', (req, res) => {
    const { username, password } = req.body
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
    const token=encrypt(username)
    res.send({
        code: 200,
        msg: '登陆成功',
        data: {
            token
        }
    })
})



module.exports = router