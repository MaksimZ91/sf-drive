import React from 'react'
import moment from 'moment'


function Message (props){
        
    return(
        <>
        {props.date?<div className='user_chat_chatWindow_date'>{moment(+props.value.createdAt).locale('ru').format('LL')}</div>:''}    
        <div className='user_chat_chatWindow_message'>
            <img className='user_chat_chatWindow_message_img' />
            <div className='user_chat_chatWindow_message_wrapper'>            
                <span className='user_chat_chatWindow_message_wrapper_text'>{props.value.body}</span>
            <div className='user_chat_chatWindow_message_wrapper_date'>{moment(+props.value.createdAt).locale('ru').format('LT')}</div>
            </div>           
        </div>
        </>
    )
}

export default Message