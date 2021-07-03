import React from 'react'
import moment  from 'moment'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector } from 'react-redux'





function ArendaIsClose (props){
  const { request } = useHttp()
  const user = props.value.user
  const toUser =  props.value.toUser
  const arendaStaus = useSelector((state)=>{
    return state.arenda.status
  })

  const body = {
    arendaID:props.value.arendaID,
     status:'Send',     
     user:user.id,
     toUser:toUser.id
  }


  const requestArenda = () =>{
   request('http://localhost:5000/chat/findeandupdate','POST', body)
  }

 
  if(arendaStaus.status == 'isClose'){
    return(
      <>
      {props.date?<div className='user_chat_chatWindow_date toUser'>{moment(+props.value.createdAt).locale('ru').format('LL')}</div>:''}    
            <div className='user_chat_chatWindow_message toUser'>
                <img className='user_chat_chatWindow_message_img toUser' />
                <div className='user_chat_chatWindow_message_wrapper toUser'>            
                    <span className='user_chat_chatWindow_message_wrapper_text toUser'>Оцените аренду. Всё ли хорошо? Оставьте отзыв автомобилю и владельцу, и вы сможете увидеть отзыв о себе</span>
                <button className='user_chat_chatWindow_message_button toUser' onClick={requestArenda}>Написать отзыв</button>    
                <div className='user_chat_chatWindow_message_wrapper_date toUser '>{moment(+props.value.createdAt).locale('ru').format('LT')}</div>
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

export default ArendaIsClose