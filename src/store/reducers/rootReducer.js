import cartReducer from "./cartReducer";
import {itemReducer} from "./itemReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    cart: cartReducer, 
    items: itemReducer, 
    
});

export default rootReducer