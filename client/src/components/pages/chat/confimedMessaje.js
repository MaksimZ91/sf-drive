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
  


// chatconf
  
  return(
    <>
    {props.date?<div className='user_chat_chatWindow_date'>{moment(+props.value.createdAt).locale('ru').format('LL')}</div>:''}    
    <div className='user_chat_chatWindow_message system'>
        <img className='user_chat_chatWindow_message_img system' src='../src/img/systemImg.svg'  />
        <div className='user_chat_chatWindow_message_wrapper system'>   
        <img  className='user_chat_chatWindow_message_wrapper-img system' src ='../src/img/chatconf.svg'/>         
            <span className='user_chat_chatWindow_message_wrapper_text system'>{text}</span>
        </div>           
    </div>
    </>
  )
}

export default ConfirmedMessage