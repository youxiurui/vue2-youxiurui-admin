const axios = require('axios')

function request(url, method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        if (method === 'GET') {
            axios.get(url, {
                params: {
                    ...data
                }
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        } else if (method === 'POST') {
            axios.post(url, data).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        }
    })
}

module.exports={request}