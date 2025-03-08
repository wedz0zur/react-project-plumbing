import { addManyProducts } from "./reducers/itemReducer"


export const fetchData = () => {
    return (dispatch) => {
        fetch("https://676f8fc5b353db80c322ff2f.mockapi.io/catalog")
            .then(res => res.json())
            .then(json => dispatch(addManyProducts(json)))
            .catch(err => console.error(err));
    }
}