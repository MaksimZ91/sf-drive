import { ADD_ARENDA } from "../type"

const defaultState = { 
    arenda:{}
}


export const arendaReducer = (state = defaultState , action) => {
    switch (action.type){
        case ADD_ARENDA:
            return {...state, arenda:action.payload}                 
        default: return state
    }

}
