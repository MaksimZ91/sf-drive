import React, { useState, useEffect, useContext } from 'react'
import Backarrow from '../../backarrow/backArrow'
import openSocket from 'socket.io-client'
import { getDate } from '../../../js/utils'
import './scss/userChat.scss'
import Message from './message'
import { useHttp } from '../../../hooks/http.hook'
import { WEBSOCKET_SERVER_URL } from '../../../js/constJS'
import { FormContex } from '../../contextApp'
import { useSelector } from 'react-redux'
import Picker from 'emoji-picker-react';



function UserChat (){
const { accessToken, userId } = useContext(FormContex)
const [chosenEmoji, setChosenEmoji] = useState(null);
const [hideEmoji, sethideEmoji] = useState(false)
const { request } = useHttp()
const [messages, setMessages]=useState([])
const [value, setValue]=useState('')
const backArrowClassName ='user_chat_user_back'
const backLink = '/chat'
const toUserId = useSelector((state)=>{
  return state.chat.toUserId
})

const handelChange = (e ) =>{ 
  setValue(e.target.value)  
}

const onEmojiClick = (event, emojiObject) => {
  setChosenEmoji(emojiObject);
  setValue(value + emojiObject.emoji )
}

const sendMessage = async (e) =>{
  e.preventDefault();
  setValue("")
  try {
    await request('http://localhost:5000/chat/created','POST', {toUserId, body:value})
  } catch (e) {  
  } 
}

useEffect(async ()=>{
  try {
    const result = await request(`http://localhost:5000/chat/findeMessage?selectedUser=${toUserId}`)
    setMessages(result)    
  } catch (error) {
    
  } 
},[])

useEffect(  ()=>{
  const socket = openSocket(WEBSOCKET_SERVER_URL)

  socket.on('message', (message) => {    
    if(message.user.id == toUserId || 
      message.toUser.id == toUserId )
      {
        setMessages([...messages, message])
      }
  })

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

  return () =>{
    socket.disconnect()
  }
 
},[accessToken, messages, toUserId ])
 
const emojiStyle = {
  zIndex:'1',
  position:'absolute',
  bottom:'42px',
  width : '350px' 
  }

  return(
    <>
    <div className='user_chat'>
      <div className='user_chat_user'>
        <Backarrow name={backArrowClassName}  value={backLink}/>
        <p>Иван И.</p>
      </div>
      <div className='user_chat_chatWindow'>   
         {messages.map((e, index)=>
           (index==0)?<Message value={e} date={true}/>:          
           <Message value={e} date={getDate(e.createdAt, messages[index-1].createdAt)} />          
        )}                
      </div>      
      <form className='user_chat_form' onSubmit={sendMessage} >   
      {hideEmoji?<Picker onEmojiClick={onEmojiClick} pickerStyle = {emojiStyle} />:''}         
        <img className='user_chat_form_file' src='../src/img/fileIcon.svg' onClick={()=>sethideEmoji(!hideEmoji)}/>       
        <input className='user_chat_form_input' type='text' value={value} onChange={handelChange} name='text'/>
        <button className='user_chat_form_button' type='submit'><img className='user_chat_form_button_img' src='../src/img/buttonImg.svg' ></img></button>
      </form>
    </div>
    </>
  )
}


export default UserChat