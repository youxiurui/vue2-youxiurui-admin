const router = require('express').Router()
const { reqCity, reqWeather } = require('../../api')

async function getCity({ location, extensions }) {
        try {
            const { regeocode } = await reqCity({ location })
        } catch (error) {
            console.log(error)
        }
    const citycode = regeocode.addressComponent.towncode?.substring(0, 6)
    return new Promise((resolve, reject) => {
        reqWeather({ citycode, extensions }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

router.get('/getWeather', async (req, res) => {
    const { location, extensions = 'all' } = req.query
    let resp
    try {
        resp = await getCity({ location, extensions })
        res.send({
            code: 200,
            message: 'success',
            data: resp
        })
    } catch (error) {
        res.send({
            code: 500,
            message: 'success',
            data: resp
        })
    }
})


module.exports = router