const CryptoJS = require('crypto-js')

const KEY = 'yizhiyouxiurui66'
const IV = 'yizhiyouxiurui66'
function encrypt(word) {
    let key = CryptoJS.enc.Utf8.parse(KEY)
    let iv = CryptoJS.enc.Utf8.parse(IV)
    // 偏移量
    let encryption = CryptoJS.enc.Utf8.parse(word)
    // 算法
    let encrypted = CryptoJS.AES.encrypt(encryption, key,
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

function decrypt(word) {
    let key = CryptoJS.enc.Utf8.parse(KEY)
    let iv = CryptoJS.enc.Utf8.parse(IV)
    let base64 = CryptoJS.enc.Base64.parse(word)
    let base64Value = CryptoJS.enc.Base64.stringify(base64)
    // AES解密
    let decrypt = CryptoJS.AES.decrypt(base64Value, key,
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        })
    return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}

module.exports={
    encrypt,
    decrypt
}