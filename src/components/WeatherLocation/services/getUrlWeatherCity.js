import {apikey,url_api} from '../../../constants/api_url'

const getUrlWeatherCity = city => {
    return url_api+"q="+city+"&appid="+apikey
}

export default getUrlWeatherCity