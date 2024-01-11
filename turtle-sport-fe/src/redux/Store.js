import {applyMiddleware, createStore} from "redux";
import {rootReducers} from "../redux/reducers/RootReducers";
import {thunk} from "redux-thunk";

const init = {};
const middleware = [thunk]
const store = createStore(rootReducers, init, applyMiddleware(...middleware));

export default store;