import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://127.0.0.1:9999',
    // baseURL:'https://xiu.youxiurui.top',
    timeout:3000
})


function request(url, method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        if (method === 'GET') {
            instance.get(url, {
                params: {
                    ...data
                }
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        } else if (method === 'POST') {
            instance.post(url, data).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        }
    })
}

export default request

