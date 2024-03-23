const express = require('express')
const router = express.Router()
const { decode } = require('../../../utils/jwt')
const menu = require('../../../data/router.js')
const { hasAdmin } = require('../../../data/adminTable.js')
const { hasUser } = require('../../../data/userTable.js')

// router.get('/menu', (req, res) => {
//     let username = decode(req.headers.token).data
//     if (hasAdmin(username)) {
//         const m = menu.map(({ type, ...rest }) => rest)
//         res.send({
//             code: 200,
//             message: 'success',
//             data: m
//         })
//     } else if (hasUser(username)) {
//         const m = menu.filter(item => item.type === 'all').map(({ type, ...rest }) => rest)
//         res.send({
//             code: 200,
//             message: 'success',
//             data: m
//         })
//     } else {
//         res.send({
//             code: 401,
//             message: '未知权限',
//             data: [],
//         })
//     }
// })

router.get('/menu', (req, res) => {
    const username = decode(req.headers.token).data;
    let responseData = { code: 401, message: '未知权限', data: [] }

    if (hasAdmin(username)) {
        responseData = {
            code: 200,
            message: 'success',
            data: menu.filter(item => item.type !== 'user').map(({ type, ...rest }) => rest)
        };
    } else if (hasUser(username)) {
        responseData = {
            code: 200,
            message: 'success',
            data: menu.filter(item => item.type === 'all').map(({ type, ...rest }) => rest)
        };
    }

    res.send(responseData)
})


// router.post('/delMenu', (req, res) => {
//     const { route } = req.body

// })




module.exports = router