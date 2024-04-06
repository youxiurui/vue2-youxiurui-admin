const router = require('express').Router()
const {v4:uuidv4}=require('uuid')
const {tableData} = require('../../data/tableData')

router.post('/getTableData', (req, res) => {
    const { page, pageSize } = req.body
    if (page > tableData.length) {
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
        tableData.forEach(item => {
            item.forEach(item => {
                if(data.list.length>=pageSize) return
                data.list.push(item)
            })
        })
    } else {
        data.list = tableData[page - 1].slice(0, page * pageSize)
    }
    tableData.forEach(item => {
        data.total += item.length
    })
    res.send({
        code: 200,
        msg: 'success',
        data
    })
})

router.post('/addTableData', (req, res) => {
    const params = req.body
    params.id = uuidv4()
    tableData.forEach(item => {
        if(item===10) return
        item.push(params)
    })
    res.send({
        code: 200,
        msg: 'success',
        data:{
            msg:'添加成功'
        }
    })
})

module.exports = router