/*
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './weathers'

const data = {
    temperature: 15,
    weatherState: RAIN,
    humidity: 10,
    wind: '15 m/s',
}

const data2 = {
    temperature: 35,
    weatherState: SUN,
    humidity: 30,
    wind: '5 m/s',
}

const data3 = {
    temperature: 25,
    weatherState: CLOUD,
    humidity: 20,
    wind: '25 m/s',
}

const data4 = {
    temperature: 20,
    weatherState: CLOUDY,
    humidity: 15,
    wind: '25 m/s',
}

const data5 = {
    temperature: 5,
    weatherState: SNOW,
    humidity: 0,
    wind: '25 m/s',
}

const datas = [data,data2,data3,data4,data5]

const location = "Santiago,cl"
*/
const apikey = "bfe99137d16ea1c0b6949e08a96bb43f"
//const rutaWeather = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid="+apikey
const url_api = "http://api.openweathermap.org/data/2.5/weather?"

//export  { data ,datas ,rutaWeather,apikey,url_api }
export  { apikey,url_api }

