const express = require('express')
const router = express.Router()
const { decode } = require('../../../utils/jwt')
const menu = require('../../../data/router.js')
const { hasAdmin } = require('../../../data/adminTable.js')
const { hasUser } = require('../../../data/userTable.js')

function screenAll(routes) {
    
    function screenAllChildren(route) {

        if (!Array.isArray(route.children)) {
            return
        }

        return route.children
            .filter(child => !child.type||child.type === 'all')
            .map(child => {
                const { type, ...rest } = child
                return {
                    ...rest,
                    children: screenAllChildren(child)
                }
            })
    }

    return routes
        .filter(route => !route.type||route.type === 'all')
        .map(route => {
            const { type, ...rest } = route
            return {
                ...rest,
                children: screenAllChildren(route)
            }
        })

}

router.get('/menu', (req, res) => {
    const username = decode(req.headers.token).data
    let responseData = { code: 401, message: '未知权限', data: [] }

    if (hasAdmin(username)) {
        responseData = {
            code: 200,
            message: 'success',
            // data: menu.filter(item => item.type !== 'user').map(({ type, ...rest }) => rest)
            data: screenAll(JSON.parse(JSON.stringify(menu)))
        }
    } else if (hasUser(username)) {
        responseData = {
            code: 200,
            message: 'success',
            data: screenAll(JSON.parse(JSON.stringify(menu)),'all')
        }
    }

    res.send(responseData)
})




module.exports = router