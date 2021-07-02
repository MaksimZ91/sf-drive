import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'
import { FormContex } from '../../contextApp'
import { useHttp } from '../../../hooks/http.hook'




function UserMessage (props){
    console.log(props)
    const { userId } = useContext(FormContex)
    const [ arenda, setArenda ] = useState('')
    const { requset } = useHttp()

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

export default UserMessage