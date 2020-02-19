import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {hot}  from 'react-hot-loader/root';
import './App.css';
import LocationList from './components/LocationList';
import { Grid,Col,Row } from 'react-flexbox-grid';
import ForecastExtended from './components/ForecastExtended'

const cities = [
  "Santiago,cl",
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex"
]

class App extends Component {

  constructor(){
    super();
    this.state = {city:'nueva ciudad'}
  }

   handleSelectedLocation = city => {
    console.log("LocationList handleSelectedLocation: "+city);      
    //this.setState({city:city})
    this.setState({city})
  }

render(){
  const {city} = this.state
  return (

      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                <ForecastExtended city={city}>                    
                    </ForecastExtended>
                </div>
              </Paper>              
            </Col>
          </Row>      
      </Grid>

  );
}
}

export default hot(App);
