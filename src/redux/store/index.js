import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import marketReducer from "../reducers/marketReducer";
import tabReducer from "../reducers/tabReducer";

const rootReducer = combineReducers({
    tabReducer,
    marketReducer,
});

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk),
);

export default store;