import React from "react";

const UserGeolocation = ({data}) => {
    return (
        <div className="col-12 bg-light my-3 shadow-sm">
            <div className="row">
                <div className="col-12 p-4 bg-info"> </div>
            </div>
            <div className="row p-2">
                <div className="col-12">
                    <h5>{data.name} {data.temp}°C</h5>
                </div>
                <div className="col-4">
                    <p>Cloudiness: <span>{data.description}</span></p>
                </div>
                <div className="col-4">
                    <p>Pressure: <span>{data.pressure} hpa</span></p>
                </div>
                <div className="col-4">
                    <p>Humidity: <span>{data.humidity}%</span></p>
                </div>
            </div>
        </div>
    )
};

export default UserGeolocation;