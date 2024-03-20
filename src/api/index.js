import request from "./request"

const URL={
    login:'/user/login',
    menu:'/auth/menu',
    weather:'/weather/getWeather'
}

export const reqLogin=(params={})=>request(URL.login,'POST',params)
export const reqMenu=(params={})=>request(URL.menu,'GET',params)
export const reqWeather=(params)=>request(URL.weather,'GET',params)