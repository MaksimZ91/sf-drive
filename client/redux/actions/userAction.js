import { ADD_USER_AVATAR_PHOTO, ADD_AVATAR_PHOTO_NAME, DELETE_AVATAR_PHOTO, ADD_USER_DOCUMENT_PHOTO, ADD_USER_DOCUMENT_PHOTO_NAME, 
    ADD_CURENT_USERID, DELETE_USER_DOCUMENT_PHOTO } from "../type"



export function addAvatar(photo){
    return{type:ADD_USER_AVATAR_PHOTO, payload:photo}
}

export function addAvatarPhotoName(name){
    return{type:ADD_AVATAR_PHOTO_NAME, payload:name}
}

export function deleteAvatarPhoto(photo){
    return { type:DELETE_AVATAR_PHOTO, payload:photo }
}

export function addUserDocumetPhoto(photos){
    return{type:ADD_USER_DOCUMENT_PHOTO, payload:photos}
}

export function addUserDocumetPhotoName(name){
    return{type:ADD_USER_DOCUMENT_PHOTO_NAME, payload:name}
}

export function addNewUserID(id){
    return{type:ADD_CURENT_USERID, payload:id}
}

export function deleteUserPhotoDocument (index){    
    return {type:DELETE_USER_DOCUMENT_PHOTO, payload:index}
}
