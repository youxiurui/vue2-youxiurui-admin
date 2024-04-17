const router = require('express').Router()
const { visits } = require('../../data/visit')
const { getOnLineAll } = require('../../data/onLine')

router.post('/list/visits', async (req, res) => {
        const {page,pageSize}=req.body
        if (page > visits.length) {
            res.send({
                code: 200,
                msg: 'success',
                data: {
                    msg: '没有更多数据了'
                }
            })
            return
        }
        const data = {
            total:0,
            page:page||1,
            pageSize:pageSize||10,
            list:[]
        }
        if (pageSize > 10) {
            visits.forEach(item => {
                item.forEach(item => {
                    if(data.list.length>=pageSize) return
                    data.list.push(item)
                })
            })
        } else {
            data.list = visits[page - 1].slice(0, page * pageSize)
        }
        visits.forEach(item => {
            data.total += item.length
        })
        res.send({
            code: 200,
            msg: 'success',
            data
        })
})

router.get('/list/onLines', async (req, res) => {
    try {
        const onLines = getOnLineAll()
        res.send({
            code: 200,
            data: {
                list:onLines
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            code: 500,
            data: null,
            msg: '服务器内部错误'
        })
    }
})

router.post('/record', (req, res) => {
    const { id } = req.body
    const date= new Date()

})

module.exports = router

