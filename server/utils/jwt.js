const jwt = require('jsonwebtoken')
const secretKey = 'youxiurui'

function encode(data) {
    return jwt.sign({ data }, secretKey, { expiresIn: '1h' })
}

function decode(token) {
    try {
        const decoded = jwt.verify(token, secretKey)
        return decoded
    } catch (err) {
        return 0
    }
}

module.exports = {
    encode,
    decode
}