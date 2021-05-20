
import { FETCH_AUTO_ALL, FETCH_AUTO_LIST,FETCH_AUTO, FILTER_AUTO,} from "../type"

const defaultState = { 
    userAuto:[],
    allAuto:[],
    currentAuto:[],
    autoFilter:[]
}


export const autoReducer = (state=defaultState , action) => {
    switch (action.type){
        case FETCH_AUTO_LIST:
            return {...state, userAuto:action.payload}
        case FETCH_AUTO_ALL:
            return {...state, allAuto:action.payload} 
        case FETCH_AUTO:
            return {...state, currentAuto:action.payload} 
        case FILTER_AUTO:
            return {...state, autoFilter:action.payload} 
        default: return state
    }

}