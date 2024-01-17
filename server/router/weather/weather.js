const router = require('express').Router()
const { reqCity, reqWeather } = require('../../api')

async function getCity({ location }) {
    // return new Promise((resolve, reject) => {
    //     reqCity({ location }).then(res => {
    //         resolve(res)
    //     }).catch(err=>{
    //         reject(err)
    //     })
    // })
    const { regeocode } = await reqCity({ location })
    // console.log(regeocode)
    const citycode = regeocode.addressComponent.towncode?.substring(0, 6)
    console.log(citycode)
    return new Promise((resolve, reject) => {
        reqWeather({ citycode }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

router.get('/weather', async (req, res) => {
    const { location } = req.query
    const resp= await getCity({ location })
    res.send(resp)
})


module.exports = router