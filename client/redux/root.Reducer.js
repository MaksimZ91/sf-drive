import { combineReducers } from "redux";
import { autoReducer } from "./reducer/auto.Reducer";
import { calenReducer } from './reducer/calen.Reducer'
import { AddAutoReducer } from './reducer/addAuto.Reducer'

export const rootReducer =  combineReducers({
    auto:autoReducer,
    newAuto:AddAutoReducer,
    calen:calenReducer
})