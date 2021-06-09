import {  ADD_START_DATE, ADD_END_DATE } from  '../type'

const defaultState = {
  startDate:'',
  endDate:''   
}


export const calenReducer = (state = defaultState , action) => {
    switch (action.type){
        case ADD_START_DATE:
            return { ...state, startDate:action.payload }       
        case ADD_END_DATE:
            return { ...state, endDate:action.payload }
        default: return state
    }

}