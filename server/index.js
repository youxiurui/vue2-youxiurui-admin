const express = require('express')
const app=express()

app.use(express.json())

app.post('/demo',(req,res)=>{
    res.send(req.body)
})

const PORT=9999
app.listen(PORT,()=>{
    console.log('服务器启动了，端口为：',PORT)
})
