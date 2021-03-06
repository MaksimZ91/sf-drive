import { fetchHttp } from '../../src/js/fetch'
import { FETCH_AUTO_ALL, FETCH_AUTO_LIST, FETCH_AUTO, ADD_END_DATE, ADD_START_DATE,ADD_AUTO_PHOTO_NAME,
     ADD_AUTO, ADD_AUTO_OPTIONS, ADD_AUTO_PHOTO, SHOW_LOADER, HIDE_LOADER, DELETE_PHOTO, ADD_AUTO_NEW_AUTO_ID,
     ADD_AUTO_DOCUMENT_PHOTO, ADD_DOCUMENT_PHOTO_NAME, DELETE_PHOTO_DOCUMENT, FILTER_AUTO,  ADD_AUTO_DOP_OPTIONS,
     ADD_ARENDA, ADD_ARENDA_OPTIONS, ADD_ARENDA_ID_USER, HIDE_ALERT, SHOW_ALERT, ADD_TO_USER_ID, SET_ARENDA_STAUS, ADD_ARENDA_ID } from '../type'
const TOKENS_KYES='tokens'


export function fetchAutoList (){    
    return async dispatch => {
        const token = await JSON.parse(localStorage.getItem(TOKENS_KYES)) 
        const data = await fetchHttp('http://localhost:5000/auto/onuser','post', {userId:token.userId})           
        dispatch({type:FETCH_AUTO_LIST, payload:data[0].autos})
    }    
}

export  function fetchArendaIDUser (id){             
    return {type:ADD_ARENDA_ID_USER, payload:id} 
}

export  function setArendaStatus (status){             
    return {type:SET_ARENDA_STAUS, payload:status} 
}

export function fetchAutoListAll (){    
    return async dispatch => {        
        const data = await fetchHttp('http://localhost:5000/auto/all/autos')
        dispatch({type:FETCH_AUTO_ALL, payload:data})
    }    
}

export function fetchAuto(id){return async dispatch => {        
    const data = await fetchHttp(`http://localhost:5000/auto/${id}`)
    dispatch({type:FETCH_AUTO, payload:data})
}}

export  function  filterAuto(data){       
       return {type:FILTER_AUTO, payload:data}
}

export function addStartDate (data){
    return{type:ADD_START_DATE, payload:data} 
}

export function addEndDate (data){
    return {type:ADD_END_DATE, payload:data}}

export function addAutoForm (state, event){ 
    if(event.target.name=='power'){
        const kwt = event.target.value * 735.5 / 1000  
    return {type:ADD_AUTO, payload:{...state, [event.target.name]:event.target.value, powerkwt:kwt }}      
    }
    return {type:ADD_AUTO, payload:{...state, [event.target.name]:event.target.value}}
}

export function addAutoOptionsForm (state, event){
    return{type:ADD_AUTO_OPTIONS, payload:{...state, [event.target.name]:event.target.checked}}
}

export function addArenda (state,name, data){
    return{type:ADD_ARENDA, payload:{...state, [name]:data}}
}

export function addDopAutoOptionsForm (state, name, data){
    return{type:ADD_AUTO_DOP_OPTIONS, payload:{...state, [name]:data}}
}

export function addArendaOptions (state, name, data){
    return{type:ADD_ARENDA_OPTIONS, payload:{...state, [name]:data}}
}


export function deletePhoto (index){    
    return {type:DELETE_PHOTO, payload:index}
}

export function deletePhotoDocument (index){    
    return {type:DELETE_PHOTO_DOCUMENT, payload:index}
}

export function addAutoPhotos(photos){
    return{type:ADD_AUTO_PHOTO, payload:photos}
}

export function addDocumetPhoto(photos){
    return{type:ADD_AUTO_DOCUMENT_PHOTO, payload:photos}
}

export function addAutoPhotoName(name){
    return{type:ADD_AUTO_PHOTO_NAME, payload:name}
}

export function addDocumetPhotoName(name){
    return{type:ADD_DOCUMENT_PHOTO_NAME, payload:name}
}

export function addToUserID(id){
    return{type:ADD_TO_USER_ID, payload:id}
}

export function showLoading(){
    return { type:SHOW_LOADER }
}

export function hideLoading(){
    return { type:HIDE_LOADER }
}

export function addNewAutoID(id){
    return { type:ADD_AUTO_NEW_AUTO_ID, payload:id }
}

export function showAlert(text) {
    return dispatch => {
      dispatch({
        type: SHOW_ALERT,
        payload: text
      })
  
      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    }
  }
  
  export function hideAlert() {
    return {
      type: HIDE_ALERT
    }
  }
  export function addArendaID (id){
    return { type:ADD_ARENDA_ID ,payload:id }
}
 
    