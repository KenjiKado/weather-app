import React from "react";
import WeatherItem from "../WeatherItem";

const WeatherList = ({data}) => {
    return (
        <div className="row">
            {data.map((item, i) => {
                    return <WeatherItem data={item} id={i} key={i}/>
                })}
        </div>
    )
};
export default WeatherList;