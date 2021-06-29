import React, { useState, useEffect, useContext } from 'react'
import Backarrow from '../../backarrow/backArrow'
import openSocket from 'socket.io-client'
import { getDate } from '../../../js/utils'
import './scss/userChat.scss'
import Message from './message'
import { useHttp } from '../../../hooks/http.hook'
import { WEBSOCKET_SERVER_URL } from '../../../js/constJS'
import { FormContex } from '../../contextApp'
const TOKENS_KEY="tokens"


function UserChat (){
const { accessToken } = useContext(FormContex)
const { request } = useHttp()
const [messages, setMessages]=useState([])
const [value, setValue]=useState('')
const backArrowClassName ='user_chat_user_back'
const backLink = '/chat'
const handelChange = (e) =>{
  setValue(e.target.value)  
}

const sendMessage = async (e) =>{
  e.preventDefault();
  setValue("")
  try {
    const result = await request('http://localhost:5000/chat/created','POST', {toUserId:2, body:value})
    setMessages([...messages, result])
  } catch (e) {  
  } 
}

useEffect(async ()=>{
  const result = await request('http://localhost:5000/chat/findeMessage?selectedUser=2')
  setMessages(result)  
},[])

useEffect(  ()=>{
  const socket = openSocket(WEBSOCKET_SERVER_URL)

  socket.on('authenticated', (authStatusResponse) => {
      if(authStatusResponse.success){
        console.log('WS was authenticated')
        return
      }
      console.error('WS was not authenticated')
    }
  )
  socket.emit('authenticate', {
    accessToken,
  })
 
},[accessToken])






  return(
    <>
    <div className='user_chat'>
      <div className='user_chat_user'>
        <Backarrow name={backArrowClassName}  value={backLink}/>
        <p>Иван И.</p>
      </div>
      <div className='user_chat_chatWindow'>   
         {messages.map((e, index)=>
           (index==0)?<Message value={e} date={true} key={e.createdAt}/>:
           <Message value={e} date={getDate(e.createdAt, messages[index-1].createdAt)} key={e.createdAt}/>
        )}              
      </div>
      <form className='user_chat_form' onSubmit={sendMessage} >
        <img className='user_chat_form_file' src='../src/img/fileIcon.svg'/>
        <input className='user_chat_form_input' type='text' value={value} onChange={handelChange} name='text'/>
        <button className='user_chat_form_button' type='submit'><img className='user_chat_form_button_img' src='../src/img/buttonImg.svg' ></img></button>
      </form>
    </div>
    </>
  )
}


export default UserChat