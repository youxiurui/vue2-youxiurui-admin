require('dotenv').config()
const express = require('express')
const app=express()
const router=require('./router')


app.use(express.json())
app.use(router.weather)


app.use('/',(req,res)=>{
    res.status(404)
    res.send({
        code:404,
        message:'未找到该资源路径'
    })
})

const PORT=9999
app.listen(PORT,()=>{
    console.log('服务器启动了，端口为：',PORT)
})
