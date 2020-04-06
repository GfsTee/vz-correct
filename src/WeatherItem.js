import React from 'react';
import './weatherItem.css'

const WeatherItem = (props) => {
    return (
        <div className="weather-item">
            <h4>{props.day}</h4>
            <img src={props.img} alt="" />
            <p>{props.tempMax}°C <span>{props.tempMin}°C</span></p>
        </div>
    );
}

export default WeatherItem;