import React, {  useEffect } from 'react'
import ServiceMessage from './ServiceMessage'
import UserMessage from './UserMessage'
import { useDispatch } from 'react-redux'
import { useHttp } from '../../../hooks/http.hook'
import { setArendaStatus } from '../../../../redux/actions/actions'



function Message (props){  
    const dispatch = useDispatch()  
    const { request } = useHttp() 
  


  
    useEffect(  async ()=>{
        if(props.value.system){
            const result = await  request(`http://localhost:5000/arenda/findearenda?arendaID=${props.value.arendaID}`)            
            dispatch(setArendaStatus(result))
        }
    },[])


    return(
    <>
    {(props.value.system)?<ServiceMessage value={props.value} nameClass={false} date={props.date}/>:<UserMessage value={props.value} date={props.date} />}
    </>
    )  
}

export default Message