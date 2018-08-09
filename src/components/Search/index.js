import React, {Component} from "react";
import {searchCity} from "../../actions";
import {connect} from "react-redux";

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchCity = this.searchCity.bind(this);
    }

    searchCity(event){
        event.preventDefault();
        let input = String(this.refs.city.value).toLowerCase();
        let have_city = this.props.cities.indexOf(input) !== -1;
        if(!have_city && input){
            this.props.addCity(input)
        }
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <form method="POST" className="col-12 my-3" onSubmit={(event)=> this.searchCity(event)}>
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control" ref="city" placeholder="Search"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Find</button>
                                    </div>
                            </div>
                            {this.props.error ?
                                <p>{this.props.error}</p>
                                :""}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.errors,
        cities: state.cities
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addCity: (city) => dispatch(searchCity(city)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);