export function cities(cities = (localStorage.getItem("cities")) ? JSON.parse(localStorage.getItem("cities")) : [] , action){
    switch (action.type){
        case "ADD_CITY":
            localStorage.setItem("cities", JSON.stringify([...cities, action.city]));
            return [...cities, action.city];
        case "REMOVE_CITY":
            localStorage.setItem("cities", JSON.stringify([...cities.slice(0, action.id), ...cities.slice(action.id + 1)]));
            return [...cities.slice(0, action.id), ...cities.slice(action.id + 1)];
        default:
            return cities;
    }
}
export function errorCatch (errors = false, action){
    switch (action.type){
        case "ERROR":
            return action.error;
        default:
            return errors;
    }
}