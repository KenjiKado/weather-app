export function reducer(state = [], action){
    switch(action.type){
        case "GET_DATA":
            return action.data;
        default:
            return state;
    }
}
export function geolocation(state = [], action){
    switch (action.type) {
        case "GET_GEOLOCATION":
            return action.user;
        default:
            return state;
    }
}