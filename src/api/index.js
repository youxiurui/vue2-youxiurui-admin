import request from "./request"

const URL = {
    login: '/login/loginIn',
    logOut: '/login/logOut',
    registerVisits: '/register/list/visits',
    registerOnLines: '/register/list/onLines',
    menu: '/auth/menu',
    weather: '/weather/getWeather',
    getTable: '/table/getTableData',
    addTable: '/table/addTableData',
}

export const reqLogin = (params = {}) => request(URL.login, 'POST', params)
export const reqMenu = () => request(URL.menu, 'GET')
export const reqWeather = (params) => request(URL.weather, 'GET', params)
export const reqTableData = (params) => request(URL.getTable, 'POST', params)
export const reqAddTable = (params) => request(URL.addTable, 'POST', params)
export const reqOnLines = () => request(URL.registerOnLines, 'GET')
export const reqVisits = (params) => request(URL.registerVisits, 'POST',params)
export const reqLogOut = (params) => request(URL.logOut, 'POST', params)