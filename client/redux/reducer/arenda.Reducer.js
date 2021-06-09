import { ADD_ARENDA } from "../type"

const defaultState = { 
    arendaParam:{cost:0,coment:''}
}


export const arendaReducer = (state = defaultState , action) => {
    switch (action.type){
        case ADD_ARENDA:
            return {...state, arendaParam:action.payload}                 
        default: return state
    }

}
