import { ADD_ARENDA, ADD_ARENDA_OPTIONS,ADD_ARENDA_ID_USER } from "../type"

const defaultState = { 
    arendaParam:{cost:0, coment:''},
    options:{ babyChair:false, deliveryAuto:false, close:false, fullTank:false },  
    arendaIDUser:null
}


export const arendaReducer = (state = defaultState , action) => {
    switch (action.type){
        case ADD_ARENDA:
            return {...state, arendaParam:action.payload}        
        case ADD_ARENDA_ID_USER:
            return {...state, arendaIDUser:action.payload}       
        case ADD_ARENDA_OPTIONS:
           return {...state, options:action.payload}
        default: return state
    }

}
