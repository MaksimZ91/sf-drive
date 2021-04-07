import { combineReducers } from "redux";
import { autoReducer } from "./reducer/auto.Reducer";
import { calenReducer } from './reducer/calen.Reducer'

export const rootReducer =  combineReducers({
    auto:autoReducer,
    calen:calenReducer
})