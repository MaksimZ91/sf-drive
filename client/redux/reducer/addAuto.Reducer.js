import {  ADD_AUTO, ADD_AUTO_OPTIONS, ADD_AUTO_PHOTO, DELETE_PHOTO, ADD_AUTO_NEW_AUTO_ID, ADD_AUTO_PHOTO_NAME, ADD_AUTO_DOCUMENT_PHOTO,
    ADD_DOCUMENT_PHOTO_NAME, DELETE_PHOTO_DOCUMENT,  ADD_AUTO_DOP_OPTIONS} from "../type"

const defaultState = {
    addAuto:{mark:'AC', model:"", year:"", number:"", vin:"", collor:"", motor:"",volume:"",power:"", powerkwt:"",
    transmission:"", mileage:"",privod:"",body:"", pts:"", sts:'', price:"", priceThreeDays:"", priceFiveDays:"", osago:"", kasko:"", type:""},
    addAutoOptions:{isofix:false, srs:false, heater:false, aux:false, bluetooth:false, cruizControl:false, conditioning:false, multimedia:false,
    navigation:false, seatCondi:false, seatHeater:false, trunk:false, park:false, camera:false },
    dopOptions:{ babyChair:false, deliveryAuto:false, close:false, fullTank:false },
    autoPhoto:[],    
    docunemtPhoto:[],
    documnetPhotoName:[],
    autoPhotoName:[],
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
        case ADD_AUTO_DOP_OPTIONS:
            return {...state, dopOptions:action.payload}    
        case ADD_AUTO_PHOTO:
                return {...state, autoPhoto:state.autoPhoto.concat([action.payload])}  
        case ADD_AUTO_PHOTO_NAME:
                return {...state, autoPhotoName:state.autoPhotoName.concat([action.payload])} 
        case ADD_DOCUMENT_PHOTO_NAME:
                 return {...state, documnetPhotoName:state.documnetPhotoName.concat([action.payload])}    
        case DELETE_PHOTO:
            return {...state, autoPhoto:[...state.autoPhoto.slice( 0, action.payload),...state.autoPhoto.slice( action.payload+1)]}
        case DELETE_PHOTO_DOCUMENT:
                return {...state, docunemtPhoto:[...state.docunemtPhoto.slice( 0, action.payload),...state.docunemtPhoto.slice( action.payload+1)]}
        case ADD_AUTO_DOCUMENT_PHOTO:
            return {...state, docunemtPhoto:state.docunemtPhoto.concat([action.payload])}     
            default: return state
        }
    
    }                        