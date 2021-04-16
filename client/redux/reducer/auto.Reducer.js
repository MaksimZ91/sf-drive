import { FETCH_AUTO_ALL, FETCH_AUTO_LIST,FETCH_AUTO, ADD_AUTO, ADD_AUTO_OPTIONS } from "../type"

const defaultState = {
    addAuto:{mark:'AC', model:'378 GT Zagato', year:null, number:null, vin:null, collor:null, motor:null,volume:null,power:null, powerkwt:null,
    transmission:null, milage:null, pts:null, sts:null, price:null, priceThreeDays:null, priceFiveDays:null, osago:null, kasko:null},
    addAutoOptions:{isofix:false, srs:false, heater:false, aux:false, bluetooth:false, cruizControl:false, conditioning:false, multimedia:false,
    navigation:false, seatCondi:false, seatHeater:false, trunk:false, park:false, camera:false, babyChair:false, deliveryAuto:false, close:false, fullTank:false },
    userAuto:[],
    allAuto:[],
    currentAuto:[]
}


export const autoReducer = (state=defaultState , action) => {
    switch (action.type){
        case FETCH_AUTO_LIST:
            return {...state, userAuto:action.payload}
        case FETCH_AUTO_ALL:
            return {...state, allAuto:action.payload} 
        case FETCH_AUTO:
            return {...state, currentAuto:action.payload} 
        case ADD_AUTO:
            return {...state, addAuto:action.payload} 
        case ADD_AUTO_OPTIONS:
            return {...state, addAutoOptions:action.payload}                  
        default: return state
    }

}