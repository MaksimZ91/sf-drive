import React, { useState, useEffect } from 'react'
import Backarrow from '../../backarrow/backArrow'
import { getDate } from '../../../js/utils'
import './scss/userChat.scss'
import Message from './message'
import { useHttp } from '../../../hooks/http.hook'



function UserChat (){
const { request } = useHttp()
const [messages, setMessages]=useState([])
const backArrowClassName ='user_chat_user_back'
const backLink = '/chat'

const sendMessage = async (e) =>{
  e.preventDefault();
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
        <p >Иван И.</p>
      </div>
      <div className='user_chat_chatWindow'>   
         {messages.map((e, index)=>
           (index==0)?<Message value={e} date={true} key={e.createdAt}/>:
           <Message value={e} date={getDate(e.createdAt, messages[index-1].createdAt)} key={e.createdAt}/>
        )}              
      </div>
      <form className='user_chat_form' onSubmit={sendMessage} >
        <img className='user_chat_form_file' src='../src/img/fileIcon.svg'/>
        <input className='user_chat_form_input' type='text' name='text'/>
        <button className='user_chat_form_button' type='submit'><img className='user_chat_form_button_img' src='../src/img/buttonImg.svg' ></img></button>
      </form>
    </div>
    </>
  )
}


export default UserChat