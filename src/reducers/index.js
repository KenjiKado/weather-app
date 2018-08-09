import { combineReducers } from 'redux';
import {reducer, geolocation} from "./loader"
import {cities, errorCatch} from "./weather";

export default combineReducers({
    data: reducer,
    userData: geolocation,
    errors: errorCatch,
    cities
});
