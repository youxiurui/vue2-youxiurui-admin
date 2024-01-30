const express=require('express')
const router=express.Router()
const menu=require('../../../data/router.json')

router.get('/menu',(req,res)=>{
    res.send({
        code:200,
        message:'success',
        data:menu
    })
})





module.exports=router