import React,{ Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import {PropTypes} from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData'
import './style.css'
//import {data, datas, rutaWeather} from '../../constants/api_url'
import getUrlWeatherCity from './services/getUrlWeatherCity'
import transformationWeather from './services/transformation'

// funtional component
//const WeatherLocation = () => (

// class component
class WeatherLocation extends Component{

    constructor(props){
        super(props)
        const {city} = props;

        this.state = {
            city,
            data: null,
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick() 
    }

    componentDidUpdate(){
        console.log('componentDidUpdate'); 
              
    }

    

    handleUpdateClick = () => {
        const rutaWeather = getUrlWeatherCity(this.state.city)
        fetch(rutaWeather).then(resolve=>{            
            return resolve.json()
        }).then(data =>{   
            console.log(transformationWeather(data))         
            this.setState({data:transformationWeather(data)});
        })      
        
    }

    /*
    // CODIGO PARA ESCOJER UN DATA RANDOM DESDE UN ARRAY
    random(min, max) {
        return (Math.random() * ((max ? max : min) - (max ? min : 0) + 1) + (max ? min : 0)) | 0;
    }
    handleUpdateClick_old = () => {
        fetch(rutaWeather).then(resolve=>{            
            return resolve.json()
        }).then(data =>{
            console.log(data);
        })        
        this.setState({data:datas[this.random(0,4)]});
    }
    */   

    render(){
        console.log('render')
            const { city,data} = this.state
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> 
                    :
                    <CircularProgress size={50}/>
                }
                <br/>
             
            </div>
        )    
    }
}

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
}
export default WeatherLocation
