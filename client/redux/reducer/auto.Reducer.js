import { FETCH_AUTO_ALL, FETCH_AUTO_LIST } from "../type"

const defaultState = {
    userAuto:[],
    allAuto:[]

}


export const autoReducer = (state=defaultState , action) => {
    switch (action.type){
        case FETCH_AUTO_LIST:
            return {...state, userAuto:action.payload}
        case FETCH_AUTO_ALL:
            return {...state, allAuto:action.payload}    

        default: return state
    }

}