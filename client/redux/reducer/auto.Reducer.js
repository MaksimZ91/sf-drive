import { FETCH_AUTO_LIST } from "../type"

const defaultState = {

}


export const autoReducer = (state=defaultState , action) => {
    switch (action.type){
        case FETCH_AUTO_LIST:
            return {...state, auto:action.payload}

        default: return state
    }

}