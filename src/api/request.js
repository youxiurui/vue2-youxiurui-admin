import axios from 'axios'

const instance = axios.create({
    baseURL:process.env.VUE_APP_URL,
    timeout:10000
})

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.token =token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
// instance.interceptors.response.use(function (response) {
//     return response.data;
// }, function (error) {
//     if (error.response && error.response.status) {
//         switch (error.response.status) {
//             case 401:
//                 // 处理401错误，比如跳转到登录页
//                 break;
//             case 403:
//                 // 处理403错误，比如提示无权限
//                 break;
//             // ... 其他错误码处理
//             default:
//                 // 处理其他错误情况
//         }
//     }
//     return Promise.reject(error);
// });

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

