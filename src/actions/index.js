const API = {
    domen: "http://api.openweathermap.org/data/2.5",
    key: "5655c28cc8ca0aea26160503c2bf7d72",
    units: "metric"
};
const URL = API.domen+"/weather?id=524901&APPID="+API.key+"&units="+API.units;

function getGeolocation(user){
    return {
        type: "GET_GEOLOCATION",
        user
    }
}
function getData(data){
    return {
        type: "GET_DATA",
        data
    }
}
export function addCity(city){
    return {
        type: "ADD_CITY",
        city
    }
}
function catchError(error) {
    return {
        type: "ERROR",
        error
    }
}
export function removeCity(id){
    return {
        type: "REMOVE_CITY",
        id
    }
}


const requestGeolocation = () => {
    return new Promise((resolve) => {

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = position.coords.latitude, lng = position.coords.longitude;
                return resolve({
                    lat: lat,
                    lng: lng
                })
            });
        }
        else {
            return resolve({
                lat: 0,
                lng: 0
            })
        }
    })
};
const getUrls = (cities) => {
    return cities.map((city) => {
        return URL+"&q="+city
    })
};
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        return fetch(url)
                .then((result) => result.json())
                .then((data) => {
                    return resolve({
                        name: data.name,
                        temp: data.main.temp,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                        description: data.weather[0].description
                    })
                })
                .catch(error => {
                    reject(new Error(error));
                });
    })
};
export const extendData = (cities) => {
    let urls = getUrls(cities);
    return function(dispatch){
        Promise.all( urls.map((url) => {
            return fetchData(url)
        })).then((result) => {
            return dispatch(getData(result));
        })
    }
};

export const extendGeolocation = () => {
    return function(dispatch) {
        requestGeolocation().then((coords) => {
            let url = URL+"&lat="+coords.lat+"&lon="+coords.lng;
            return fetchData(url)
        }).then((data) => {
            return dispatch(getGeolocation(data))
        })
    }
};

export const searchCity = (city) => {
    return function(dispatch) {
        let url = URL+"&q="+city;
        fetch(url).then((result) => result.json()).then((result) => {

            if(!result.message) {
                dispatch(addCity(city));
                dispatch(catchError(false));
            }
            else {
                dispatch(catchError(result.message))
            }
        })
    }
};

