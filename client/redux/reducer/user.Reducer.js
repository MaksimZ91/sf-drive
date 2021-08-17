import {  ADD_USER_AVATAR_PHOTO, ADD_USER_DOCUMENT_PHOTO} from  '../type'

const defaultState = {
  userDocumentPhoto:[],
  userAvatar:null
}


export const userReducer = (state = defaultState , action) => {
    switch (action.type){
        case ADD_USER_DOCUMENT_PHOTO:
            return { ...state, userDocumentPhoto:state.userDocumentPhoto.concat([action.payload]) } 
        case ADD_USER_AVATAR_PHOTO:
            return { state, userAvatar:action.payload } 
        default: return state
    }
}