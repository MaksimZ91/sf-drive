import {  ADD_AVATAR_PHOTO_NAME, ADD_USER_AVATAR_PHOTO, ADD_USER_DOCUMENT_PHOTO, DELETE_AVATAR_PHOTO } from  '../type'

const defaultState = {
  userDocumentPhoto:[],
  userAvatar:null,
  avatarPhotoName:null
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
        default: return state
    }
}