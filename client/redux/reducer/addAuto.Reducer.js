import {  ADD_AUTO, ADD_AUTO_OPTIONS, ADD_AUTO_PHOTO, DELETE_PHOTO, ADD_AUTO_NEW_AUTO_ID } from "../type"

const defaultState = {
    addAuto:{mark:'AC', model:null, year:null, number:null, vin:null, collor:null, motor:'Бензин',volume:null,power:null, powerkwt:null,
    transmission:null, mileage:null, pts:null, sts:null, price:null, priceThreeDays:null, priceFiveDays:null, osago:null, kasko:null},
    addAutoOptions:{isofix:false, srs:false, heater:false, aux:false, bluetooth:false, cruizControl:false, conditioning:false, multimedia:false,
    navigation:false, seatCondi:false, seatHeater:false, trunk:false, park:false, camera:false, babyChair:false, deliveryAuto:false, close:false, fullTank:false },
    autoPhoto:[],
    newAutoId:null
    
}


export const AddAutoReducer = (state=defaultState , action) => {
    switch (action.type){     
        case ADD_AUTO:
            return {...state, addAuto:action.payload}
        case ADD_AUTO_NEW_AUTO_ID:
            return {...state, newAutoId:action.payload}      
        case ADD_AUTO_OPTIONS:
            return {...state, addAutoOptions:action.payload}
        case ADD_AUTO_PHOTO:
                return {...state, autoPhoto:state.autoPhoto.concat([action.payload])}  
        case DELETE_PHOTO:
            return {...state, autoPhoto:[...state.autoPhoto.slice( 0, action.payload),...state.autoPhoto.slice( action.payload+1)]}
            default: return state
        }
    
    }                        