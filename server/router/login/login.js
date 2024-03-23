const router = require('express').Router()
const { getAdmin, setAdmin, hasAdmin } = require('../../data/adminTable')
const { getUser, setUser, hasUser } = require('../../data/userTable')
const { encode } = require('../../utils/jwt')
const { decrypt } = require('../../utils/crypto')

// router.post('/login', (req, res) => {
//     let { username, password } = req.body
//     try {
//         username = decrypt(username)
//         password = decrypt(password)
//         if (hasAdmin(username)) {
//             if (getAdmin(username).password !== password) {
//                 res.send({
//                     code: 401,
//                     data: null,
//                     msg: '密码错误'
//                 })
//                 return
//             }
//             const token = encode(username)
//             res.send({
//                 code: 200,
//                 msg: '登陆成功',
//                 data: {
//                     token
//                 }
//             })
//         } else if (hasUser(username)) {
//             if (getUser(username).password !== password) {
//                 res.send({
//                     code: 401,
//                     data: null,
//                     msg: '密码错误'
//                 })
//                 return
//             }
//             const token = encode(username)
//             res.send({
//                 code: 200,
//                 msg: '登陆成功',
//                 data: {
//                     token
//                 }
//             })
//         } else {
//             res.send({
//                 code: 401,
//                 data: null,
//                 msg: '无效账号'
//             })
//         }
//     } catch (err) {
//         res.send({
//             code: 401,
//             data: null,
//             msg: '登录错误'
//         })
//     }
// })

router.post('/login', async (req, res) => {
    try {
        const decryptedUsername = decrypt(req.body.username)
        const decryptedPassword = decrypt(req.body.password)

        const account = hasAdmin(decryptedUsername) ? getAdmin(decryptedUsername) :
            hasUser(decryptedUsername) ? getUser(decryptedUsername) :
                null

        if (!account) {
            return res.json({
                code: 404,
                data: null,
                msg: '无效账号'
            });
        }

        if (account.password === decryptedPassword) {
            const token = encode(decryptedUsername)
            return res.json({
                code: 200,
                msg: '登录成功',
                data: { token }
            });
        } else {
            return res.json({
                code: 401,
                data: null,
                msg: '密码错误'
            });
        }
    } catch (error) {
        console.error(error)
        return res.json({
            code: 500,
            data: null,
            msg: '服务器内部错误'
        })
    }
})





module.exports = router