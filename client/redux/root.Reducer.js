import { combineReducers } from "redux";
import { autoReducer } from "./reducer/auto.Reducer";

export const rootReducer =  combineReducers({
    auto:autoReducer
})