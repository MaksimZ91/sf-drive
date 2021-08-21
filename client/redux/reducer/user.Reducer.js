import {  ADD_AVATAR_PHOTO_NAME, ADD_USER_AVATAR_PHOTO, ADD_USER_DOCUMENT_PHOTO, DELETE_AVATAR_PHOTO, ADD_CURENT_USERID, DELETE_USER_DOCUMENT_PHOTO, ADD_USER_DOCUMENT_PHOTO_NAME } from  '../type'

const defaultState = {
  userDocumentPhoto:[],
  userDocumentPhotoName:[],
  userAvatar:null,
  avatarPhotoName:null,
  newUserID:null
}


export const userReducer = (state = defaultState , action) => {
    switch (action.type){
        case ADD_USER_DOCUMENT_PHOTO:
            return { ...state, userDocumentPhoto:state.userDocumentPhoto.concat([action.payload]) } 
        case ADD_USER_AVATAR_PHOTO:
            return { ...state, userAvatar:action.payload } 
        case ADD_AVATAR_PHOTO_NAME:
            return { ...state, avatarPhotoName:action.payload } 
        case DELETE_AVATAR_PHOTO:
            return { ...state, avatarPhotoName:action.payload, userAvatar:action.payload }  
        case ADD_CURENT_USERID:
            return{ ...state, newUserID:action.payload }    
        case ADD_USER_DOCUMENT_PHOTO_NAME:
            return {...state, userDocumentPhotoName:state.userDocumentPhotoName.concat([action.payload])}   
        case DELETE_USER_DOCUMENT_PHOTO:
            return {...state, userDocumentPhoto:[...state.userDocumentPhoto.slice( 0, action.payload),...state.userDocumentPhoto.slice( action.payload+1)]}         
        default: return state
    }
}