import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'
import { FormContex } from '../../contextApp'
import classNames from 'classnames';




function UserMessage (props){
    const { userId } = useContext(FormContex)
    const currentUser = props.value.user.id == userId
    const received = !currentUser
   

    return(
        <>
          {props.date?<div className={classNames('user_chat_chatWindow_date', {
        'user': currentUser,
        'toUser': received,
      })}>{moment(+props.value.createdAt).locale('ru').format('LL')}</div>:''}    
            <div className={classNames('user_chat_chatWindow_message', {
        'user': currentUser,
        'toUser': received,
      })}>
                <img className='user_chat_chatWindow_message_img' />
                <div className='user_chat_chatWindow_message_wrapper'>            
                    <span className='user_chat_chatWindow_message_wrapper_text'>{props.value.body}</span>
                <div className='user_chat_chatWindow_message_wrapper_date'>{moment(+props.value.createdAt).locale('ru').format('LT')}</div>
                </div>           
            </div>
        </>
    )
}

export default UserMessage