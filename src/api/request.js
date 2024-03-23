import axios from 'axios'

const instance = axios.create({
    baseURL:process.env.VUE_APP_URL,
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
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    console.log(error)
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

