import React from 'react';
import {hot}  from 'react-hot-loader/root';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Santiago,cl",
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex"
]


function App() {

  const handleSelectedLocation = city => {
    console.log("LocationList handleSelectedLocation: "+city);
  }

  return (
    <div className="App">
      Weather App!
      <LocationList cities={cities} onSelectedLocation={handleSelectedLocation}></LocationList>
    </div>
  );
}

export default hot(App);
