// RootReducers.js
import { combineReducers } from 'redux';
import {authReducer} from './AuthReducers';

export const rootReducers = combineReducers({
    auth: authReducer
});