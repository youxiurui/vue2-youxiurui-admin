const router = require('express').Router()
const { getAdmin, setAdmin, hasAdmin } = require('../../data/adminTable')
const { getUser, setUser, hasUser } = require('../../data/userTable')
const { encode } = require('../../utils/jwt')
const { decrypt } = require('../../utils/crypto')

router.post('/login', (req, res) => {
    let { username, password } = req.body
    try {
        username = decrypt(username)
        password = decrypt(password)
        if (hasAdmin(username)) {
            if (getAdmin(username).password !== password) {
                res.send({
                    code: 401,
                    data: null,
                    msg: '密码错误'
                })
                return
            }
            const token = encode(username)
            res.send({
                code: 200,
                msg: '登陆成功',
                data: {
                    token
                }
            })
        } else if (hasUser(username)) {
            if (getUser(username).password !== password) {
                res.send({
                    code: 401,
                    data: null,
                    msg: '密码错误'
                })
                return
            }
            const token = encode(username)
            res.send({
                code: 200,
                msg: '登陆成功',
                data: {
                    token
                }
            })
        } else {
            res.send({
                code: 401,
                data: null,
                msg: '无效账号'
            })
        }
    } catch (err) {
        res.send({
            code: 401,
            data: null,
            msg: '登录错误'
        })
    }
})



module.exports = router