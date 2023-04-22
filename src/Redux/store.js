import { legacy_createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "./AuthReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinereducer = combineReducers({
    AuthReducer
})

const store = legacy_createStore(
    combinereducer,
    composeEnhancers(applyMiddleware(thunk))
);

export {store};