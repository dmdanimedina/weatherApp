import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Location = (props) => {
    //console.log(props)
    //debugger;
    //const city = props.city

    //destructuring
    const {city} = props

    return  (
    <div className="LocationCont"><h1>{city}</h1></div>
    )
}
/*
const Location = ({city}) => ()
    <div><h1>{city}</h1></div>
    )
*/

Location.propTypes = {
    city: PropTypes.string.isRequired,
}



export default  Location