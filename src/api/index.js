import request from "./request"

const URL={
    login:'/user/login',
    menu:'/auth/menu',
    weather:'/weather/getWeather'
}

export const reqLogin=(params={})=>request(URL.login,'POST',params)
export const reqMenu=()=>request(URL.menu,'GET')
export const reqWeather=(params)=>request(URL.weather,'GET',params)