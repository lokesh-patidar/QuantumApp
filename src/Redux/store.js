import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "./AuthReducer/reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(
    AuthReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export {store};