import { combineReducers } from "redux";
import { autoReducer } from "./reducer/auto.Reducer";
import { calenReducer } from './reducer/calen.Reducer'
import { AddAutoReducer } from './reducer/addAuto.Reducer'
import { appReducer } from "./reducer/app.Reducer";
import { arendaReducer } from "./reducer/arenda.Reducer";
import { chatReducer } from "./reducer/chat.Reducer";

export const rootReducer =  combineReducers({
    auto:autoReducer,
    newAuto:AddAutoReducer,
    calen:calenReducer,
    app:appReducer,
    arenda:arendaReducer,
    chat:chatReducer
})