const router = require('express').Router()
const os = require('os')
const process = require('process')
const { timestampToTime } = require('../../utils')
const { reqOuterNetIP } = require('../../api')

const startTime = new Date()

router.get('/os', async (req, res) => {
    try {
        const ip = await reqOuterNetIP()
        const data = {
            system: {
                hostname: os.hostname(),
                type: os.type(),
                arch: os.arch(),
                cpu: os.cpus().length,
                runTime: Math.floor(os.uptime() / (24 * 60 * 60)),
                platform: os.platform(),
                ip
            },
            node: {
                startTime:timestampToTime(startTime),
                runTime: Math.floor((new Date()- startTime)/ (24 * 60 * 60 * 1000)),
                dirname: process.cwd(),
                environment:'Node'
            }
        }
        res.send({
            code: 200,
            data: {
                ...data
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            code: 500,
            data: null,
            msg: '服务内部错误'
        })
    }
})

module.exports = router