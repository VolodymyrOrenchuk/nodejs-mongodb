import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import formReducer from "./formReducer";
import formNewsReducer from "./formNewsReducer";

const rootReducer = combineReducers({
    formReducer,
    formNewsReducer
})


const store = createStore(rootReducer,composeWithDevTools())
export default store