import React from 'react'
import moment  from 'moment'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector } from 'react-redux'





function ConfirmArenda (props){
  const { request } = useHttp()
  const user = props.value.user
  const toUser =  props.value.toUser
  const arendaStaus = useSelector((state)=>{
    return state.arenda.status
  })

  const body = {
    arendaID:props.value.arendaID,
     status:'isActive',     
     user:user.id,
     toUser:toUser.id
  }


  const requestArenda = () =>{
   request('http://localhost:5000/chat/findeandupdate','POST', body)
  }


  if(arendaStaus.status == 'confirm'){
    return(
      <>
      {props.date?<div className='user_chat_chatWindow_date toUser'>{moment(+props.value.createdAt).locale('ru').format('LL')}</div>:''}    
            <div className='user_chat_chatWindow_message toUser'>
                <img className='user_chat_chatWindow_message_img toUser' />
                <div className='user_chat_chatWindow_message_wrapper toUser'>            
                    <span className='user_chat_chatWindow_message_wrapper_text toUser'>Подтвердите, когда начнёте аренду</span>
                <button className='user_chat_chatWindow_message_button toUser' onClick={requestArenda}>Начать аренду</button>    
                <div className='user_chat_chatWindow_message_wrapper_date toUser'>{moment(+props.value.createdAt).locale('ru').format('LT')}</div>
                </div>                       
            </div>
    </>
    )
  }else{
    return(
    <>
    </>
    )
  }
 
  
}

export default ConfirmArenda