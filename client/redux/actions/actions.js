import { fetchHttp } from '../../src/js/fetch'
import { FETCH_AUTO_LIST } from '../type'
const TOKENS_KYES='tokens'


export function fetchAutoList (){
    
    return async dispatch => {
        const auto = await JSON.parse(localStorage.getItem(TOKENS_KYES)) 
        console.log(auto)
        const data = fetchHttp('http://localhost:5000/auto/test','post', {userId:auto.userId})
        dispatch({type:FETCH_AUTO_LIST, payload:data})
    }
}

 
    