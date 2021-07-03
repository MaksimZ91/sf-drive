import React, { useEffect, useState } from 'react'
import moment from 'moment'




function ConfirmedMessage (props){
  const [text ,setText] = useState('')
  


  useEffect(()=>{
    switch (props.value.body) {
      case 'confirm':
        setText('Бронирование подтверждено')    
        break;
      case 'isActive':
          setText('Аренда Начата') 
        break;  
      case 'isClose':
          setText('Аренда завершена')
        break;  
      case 'Send':
            setText('Отзыв отправлен')  
        break; 
      default:''
        break;
    }
  },[text])
  


//src='../src/img/systemImg.svg'
  
  return(
    <>
    {props.date?<div className='user_chat_chatWindow_date toUser'>{moment(+props.value.createdAt).locale('ru').format('LL')}</div>:''}    
    <div className='user_chat_chatWindow_message toUser'>
        <img className='user_chat_chatWindow_message_img toUser'  />
        <div className='user_chat_chatWindow_message_wrapper toUser toUser'>            
            <span className='user_chat_chatWindow_message_wrapper_text toUser'>{text}</span>
        <div className='user_chat_chatWindow_message_wrapper_date toUser'>{moment(+props.value.createdAt).locale('ru').format('LT')}</div>
        </div>           
    </div>
    </>
  )
}

export default ConfirmedMessage