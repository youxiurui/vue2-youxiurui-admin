import request from "./request"

const URL={
    login:'/user/login',
    menu:'/auth/menu',
    weather:'/weather/getWeather',
    getTable:'/table/getTableData',
    addTable:'/table/addTableData',
}

export const reqLogin=(params={})=>request(URL.login,'POST',params)
export const reqMenu=()=>request(URL.menu,'GET')
export const reqWeather=(params)=>request(URL.weather,'GET',params)
export const reqTableData=(params)=>request(URL.getTable,'POST',params)
export const reqAddTable=(params)=>request(URL.addTable,'POST',params)