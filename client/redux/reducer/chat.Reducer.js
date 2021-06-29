import {  ADD_TO_USER_ID } from  '../type'

const defaultState = {
  toUserId:'',
  
}


export const chatReducer = (state = defaultState , action) => {
    switch (action.type){
        case ADD_TO_USER_ID:
            return { ...state, toUserId:action.payload } 
        default: return state
    }

}