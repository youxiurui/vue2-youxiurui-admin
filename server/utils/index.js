const fs = require("fs/promises")

// 时间戳转为"YYYY-MM-DD HH-MM"
function timestampToTime(timestamp) {
    let date = new Date(timestamp)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
    let D = date.getDate() < 10 ? '0'+date.getDate() + ' ' : date.getDate() + ' '
    let h = date.getHours() < 10 ? '0'+date.getHours() + ':' : date.getHours() + ':'
    let m = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
    return Y+M+D+h+m
}

async function asyncWrite(data,filePath){
    try {
        await fs.writeFile(filePath,JSON.stringify(data))
        console.log('数据写入成功---',timestampToTime(Date.now()))
    } catch (err) {
        console.log('数据写入失败---',timestampToTime(Date.now()))
        console.log(err)
    }
}

module.exports={
    timestampToTime,
    asyncWrite
}