const router = require('express').Router()
const UAParser = require('ua-parser-js')
const { v4: uuidv4 } = require('uuid')
const { getAdmin, hasAdmin } = require('../../data/adminTable')
const { getUser, hasUser } = require('../../data/userTable')
const { setVisit } = require('../../data/visit')
const { setOnLine, hasOnLine, delOnLine } = require('../../data/onLine')
const { encode } = require('../../utils/jwt')
const { decrypt } = require('../../utils/crypto')
const { reqLocation, reqCity } = require('../../api')

router.post('/loginIn', async (req, res) => {
    try {
        const decryptedUsername = decrypt(req.body.username)
        const decryptedPassword = decrypt(req.body.password)
        const decryptedPosition = JSON.parse(decrypt(req.body.position))
        const account = hasAdmin(decryptedUsername) ? getAdmin(decryptedUsername) :
            hasUser(decryptedUsername) ? getUser(decryptedUsername) :
                null
        const info = {}
        if (Reflect.ownKeys(decryptedPosition).length > 0) {
            const { longitude, latitude } = decryptedPosition
            const longitudeStr = longitude.toString().substring(0, 10)
            const latitudeStr = latitude.toString().substring(0, 9)
            const position = await reqCity({ location: `${longitudeStr},${latitudeStr}` })
            if (position.infocode === '10000') {
                info.place = position.regeocode.formatted_address.length !== 0 ? position.regeocode.formatted_address : ''
            }
        }

        if (!account) {
            return res.send({
                code: 404,
                data: null,
                msg: '无效账号'
            });
        }

        if (account.password === decryptedPassword) {
            const ip = req.ip
            const id = uuidv4()
            const parser = new UAParser()
            const ua = req.headers['user-agent']
            const result = parser.setUA(ua).getResult()
            const { province, city } = await reqLocation({ ip })
            if (info.place || (province.length !== 0 && city.length !== 0)) {
                info.place = info.place ? info.place : `${province} ${city}`
            } else {
                info.place = '无法获取'
            }
            info.id = id
            info.host = ip
            info.loginName = decryptedUsername
            info.browser = result.browser.name
            info.os = result.os.name + ' ' + result.os.version
            info.date = Date.now()
            setVisit(info)
            setOnLine(id, info)

            const token = encode(decryptedUsername)
            return res.send({
                code: 200,
                msg: '登录成功',
                data: { id, token }
            });
        } else {
            return res.send({
                code: 401,
                data: null,
                msg: '密码错误'
            });
        }
    } catch (error) {
        console.error(error)
        return res.send({
            code: 500,
            data: null,
            msg: '服务器内部错误'
        })
    }
})

router.post('/logOut', (req, res) => {
    const { id } = req.body
    if (hasOnLine(id)) {
        delOnLine(id)
    }
    res.send({
        code: 200,
        data: null,
        msg: '退出成功'
    })
})


module.exports = router