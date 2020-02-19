import React, { Component } from 'react';


class ForecastExtended  extends Component {
   render(){
       // llama la variable del componente
       const {city} = this.props;
        return (
            <div>Pronosticon del tiempo {city}</div>
        )
   }
}

export default ForecastExtended