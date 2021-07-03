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
          {props.date?<div className='user_chat_chatWindow_date'>{moment(+props.value.createdAt).locale('ru').format('LL')}</div>:''}    
            <div className={classNames('user_chat_chatWindow_message',{
        'user': currentUser,
        'toUser': received,
      })}>
            {received?<img className={classNames('user_chat_chatWindow_message_img',{
        'user': currentUser,
        'toUser': received,
      })} src='../src/img/chatavatrmock.svg'/>:''}
                <div className={classNames('user_chat_chatWindow_message_wrapper',{
        'user': currentUser,
        'toUser': received,
      })}>            
                <span className={classNames('user_chat_chatWindow_message_wrapper_text',{
        'user': currentUser,
        'toUser': received,
      })}>{props.value.body}</span>
                <div className={classNames('user_chat_chatWindow_message_wrapper_date',{
        'user': currentUser,
        'toUser': received,
      })}>{moment(+props.value.createdAt).locale('ru').format('LT')}</div>
                </div>           
            </div>
        </>
    )
}

export default UserMessage