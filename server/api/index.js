const { request } = require('./request')

const AUTONAVI_KEY = process.env.AUTONAVI_KEY

const WEATHER_URL = 'https://restapi.amap.com/v3/weather/weatherInfo'
const CITY_URL = 'https://restapi.amap.com/v3/geocode/regeo'
const IP_URL = 'https://restapi.amap.com/v3/ip'
const Outer_Net_IP = 'http://api.ipify.org'

exports.reqCity = ({ location }) => request(CITY_URL, 'GET', { location, key: AUTONAVI_KEY })
exports.reqWeather = ({ citycode }) => request(WEATHER_URL, 'GET', { city: citycode, key: AUTONAVI_KEY })
exports.reqLocation = ({ ip }) => request(IP_URL, 'GET', { ip, key: AUTONAVI_KEY })
exports.reqOuterNetIP = () => request(Outer_Net_IP, 'GET')