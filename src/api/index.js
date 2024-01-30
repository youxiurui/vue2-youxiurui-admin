import request from "./request"

const URL={
    menu:'/auth/menu',
    weather:'/weather/getWeather'
}

export const reqMenu=(params={})=>request(URL.menu,'GET',params)
export const reqWeather=(params)=>request(URL.weather,'GET',params)