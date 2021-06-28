import React, { useState, useEffect } from 'react'
import Backarrow from '../../backarrow/backArrow'
import moment from 'moment'
import './scss/userChat.scss'
import Message from './message'
import { useHttp } from '../../../hooks/http.hook'


function UserChat (){
const { request } = useHttp()
const [messages, setMessages]=useState([])
const [date, setDate] = useState(Date.now())
const backArrowClassName ='user_chat_user_back'
const backLink = '/chat'

const sendMessage = async () =>{
  try {
    const result = await request('http://localhost:5000/chat/created','POST', {toUserId:2, body:'zxkehsbg'})
    setMessages([...messages, result])
  } catch (e) {  
  } 
}

useEffect(async ()=>{
  const result = await request('http://localhost:5000/chat/findeMessage?selectedUser=2')
  setMessages(result)
},[])







  return(
    <>
    <div className='user_chat'>
      <div className='user_chat_user'>
        <Backarrow name={backArrowClassName}  value={backLink}/>
        <p onClick={sendMessage}>Иван И.</p>
      </div>
      <div className='user_chat_chatWindow'>   
         {messages.map((e, index)=>

         <Message value={e} key={e.createdAt}/>
        )}              
      </div>
      <form className='user_chat_form'>
        <img className='user_chat_form_file' src='../src/img/fileIcon.svg'/>
        <input className='user_chat_form_input' type='text' name='text'/>
        <button className='user_chat_form_button'><img className='user_chat_form_button_img' src='../src/img/buttonImg.svg' ></img></ button>
      </form>
    </div>
    </>
  )
}


export default UserChat