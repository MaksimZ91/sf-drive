import { ADD_USER_AVATAR_PHOTO, ADD_USER_DOCUMENT_PHOTO } from "../type"



export function addAvatar(photo){
    return{type:ADD_USER_AVATAR_PHOTO, payload:photo}
}

export function addDocumetPhoto(photos){
    return{type:ADD_USER_DOCUMENT_PHOTO, payload:photos}
}