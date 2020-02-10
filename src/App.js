import React from 'react';
import {hot}  from 'react-hot-loader/root';
import './App.css';
import LocationList from './components/LocationList';

function App() {
  return (
    <div className="App">
      Weather App!
      <LocationList></LocationList>
    </div>
  );
}

export default hot(App);
