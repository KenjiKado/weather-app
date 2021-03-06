import React, { Component } from 'react';
import WeatherDashboard from "../WeatherDashboard";
import Search from "../Search";

class App extends Component {
  render() {
    return (
        <div className="weather-app">
            <Search/>
            <WeatherDashboard/>
        </div>
    );
  }
}

export default App;