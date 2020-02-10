import React from 'react'
import WeatherLocation from './WeatherLocation'

const LocationList = () => {
    return(
        <div>
            <WeatherLocation city="Santiago,cl"></WeatherLocation>
            <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
            <WeatherLocation city="Bogota,col"></WeatherLocation>
            <WeatherLocation city="Mexico,mex"></WeatherLocation>
            <br/>
        </div>
    )
}

export default LocationList