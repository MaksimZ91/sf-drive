import { fetchHttp } from '../../src/js/fetch'
import { FETCH_AUTO_ALL, FETCH_AUTO_LIST, FETCH_AUTO, ADD_END_DATE, ADD_START_DATE } from '../type'
const TOKENS_KYES='tokens'


export function fetchAutoList (){    
    return async dispatch => {
        const token = await JSON.parse(localStorage.getItem(TOKENS_KYES)) 
        const data = await fetchHttp('http://localhost:5000/auto/onuser','post', {userId:token.userId})
        dispatch({type:FETCH_AUTO_LIST, payload:data})
    }    
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

export function addStartDate (data){
    return{type:ADD_START_DATE, payload:data} 
}

export function addEndDate (data){
    return {type:ADD_END_DATE, payload:data}
}
 
    