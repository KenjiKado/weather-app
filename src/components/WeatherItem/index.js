import React, {Component} from "react";
import { connect } from 'react-redux';
import { removeCity } from "../../actions";

class WeatherItem extends Component{
    render() {
        return (
            <div className="col-4 my-2">
                <div className="container shadow-sm bg-light">
                    <div className="row">
                        <div className="col-12 bg-info p-2">
                            <div className="row">
                                <div className="col-1 offset-11">
                                    <button type="button" className="close text-white" onClick={() => this.props.removeCity(this.props.id)} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="row">
                                <div className="col-8">
                                    <h5>{this.props.data.name}</h5>
                                </div>
                                <div className="col-4 text-right">
                                    <h5>{this.props.data.temp}°C</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <p>Cloudiness: <span>{this.props.data.description}</span></p>
                        </div>
                        <div className="col-12">
                            <p>Pressure: <span>{this.props.data.pressure} hpa</span></p>
                        </div>
                        <div className="col-12">
                            <p>Humidity: <span>{this.props.data.humidity}%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cities: state.cities
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeCity: (id) => dispatch(removeCity(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherItem);