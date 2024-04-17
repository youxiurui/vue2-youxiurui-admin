import CryptoJS from 'crypto-js'

// 此处密钥和偏移量和后端保持一致，可以直接把后端里的密钥和偏移量复制过来
const KEY = process.env.VUE_APP_KEY
const IV = process.env.VUE_APP_IV

export function encrypt(word) {
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

export function decrypt(word) {
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
