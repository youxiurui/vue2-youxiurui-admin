import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'

const instance = axios.create({
    baseURL:process.env.VUE_APP_URL,  // 此处地址可以改为本机地址，端口为后端服务端口
    timeout:10000
})

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')||sessionStorage.getItem('token')
    if (token) {
        config.headers.token =token
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    if (response.data.code === 401&&!response.data.status) {
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        Message.warning('登录过期，请重新登录')
        router.push({
            name:'login'
        })
        return Promise.reject({status:false})
    }
    return response
}, function (error) {
    console.log(error)
    return Promise.reject(error)
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

