import CryptoJS from 'crypto-js'

const KEY = 'yizhiyouxiurui66'
const iv = 'yizhiyouxiurui66'

export function encrypt(data) {
    const key = CryptoJS.enc.Utf8.parse(KEY)
    // const iv = CryptoJS.lib.WordArray.random(128 / 8)
    const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
    const ivString = CryptoJS.enc.Hex.stringify(iv)
    return { encrypted, ivString }
}
export function decrypt(encrypted, ivString) {
    const key = CryptoJS.enc.Utf8.parse(KEY)
    // const iv = CryptoJS.enc.Hex.parse(ivString)
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    const originalText = decrypted.toString(CryptoJS.enc.Utf8)
    return originalText
}
