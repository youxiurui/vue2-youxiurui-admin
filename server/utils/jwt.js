const jwt = require('jsonwebtoken')
const secretKey = 'youxiurui'

function encode(data){
    return jwt.sign({data}, secretKey, {expiresIn: '1h'})
}

function decode(token){
    jwt.verify(token, secretKey, (err, decoded) => {
        if(err){
            return 0
        }else{
            return decoded
        }
    })
}

module.exports={
    encode,
    decode
}