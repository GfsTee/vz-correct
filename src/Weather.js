import React from 'react';
import WeatherItem from './WeatherItem'
import data from './data'



const Weather = () => {
    const allItems = data.map((element, i) => <WeatherItem key={i}
        day={element.day}
        img={element.img}
        tempMin={element.tempMin}
        tempMax={element.tempMax}
    />)
    return (
        <div className="weather">
            {allItems}
        </div>);
}

export default Weather;