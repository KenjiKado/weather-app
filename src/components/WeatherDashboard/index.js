import React, { Component } from 'react';
import { connect } from 'react-redux';
import { extendData, extendGeolocation } from "../../actions";
import WeatherList from "../WeatherList";
import UserGeolocation from "../UserGeolocation";

class WeatherDashboard extends Component {
    componentWillMount(){
        this.props.extendData(this.props.cities);
        this.props.getGeolocation();
    }
    componentDidUpdate(prevProps){
        if(this.props.cities !== prevProps.cities) {
            this.props.extendData(this.props.cities);
        }
    }
    render() {
        return (
            <div className="container">
                <UserGeolocation data={this.props.userData}/>
                <WeatherList data={this.props.data}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        userData: state.userData,
        cities: state.cities
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getGeolocation: () => dispatch(extendGeolocation()),
        extendData: (urls) => dispatch(extendData(urls)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDashboard);