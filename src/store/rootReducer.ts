import { combineReducers } from '@reduxjs/toolkit';
import boxReducer from './reducers/boxReducer';
export const rootReducer= combineReducers({
    box:boxReducer
})