const {request}=require('./request')

const AUTONAVI_KEY=process.env.AUTONAVI_KEY

const WEATHER_URL='https://restapi.amap.com/v3/weather/weatherInfo'
const CITY_URL='https://restapi.amap.com/v3/geocode/regeo'

exports.reqCity=({location})=>request(CITY_URL,'GET',{location,key:AUTONAVI_KEY})
exports.reqWeather=({citycode})=>request(WEATHER_URL,'GET',{city:citycode,key:AUTONAVI_KEY})