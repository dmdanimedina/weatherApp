import React from 'react'
import WeatherLocation from './WeatherLocation'



const LocationList = ({cities,onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log("WeatherLocation :"+city)
        onSelectedLocation(city)
    }
    const srtToComponents = cities => (
        cities.map( (city,index) => (
            <WeatherLocation 
                index={index} key={index+'_'+city} city={city}
                onWeatherLocationClick={()=>handleWeatherLocationClick(city)}
                >                    
                </WeatherLocation>
        ))
    )



    return(
        <div>
            {srtToComponents(cities)}
            <br/>
        </div>
    )
}

export default LocationList