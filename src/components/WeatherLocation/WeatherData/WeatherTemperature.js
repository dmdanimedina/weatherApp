import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'

import './style.css'


const icons = {
    sun:"day-sunny",
    fog: "day-fog",
    cloud:"cloud",
    cloudy:"cloudy",
    rain:"rain",
    snow:"snow",
    windy:"windy",
    thunder:"day-thunderstore",
    drizzle:"day-showers",
}

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];  
    
    const sizeIcon = "4x";
    
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
}

const WeatherTemperature = ({temperature,weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{temperature}°</span><span className="temperatureType"> C</span></div>
)

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature