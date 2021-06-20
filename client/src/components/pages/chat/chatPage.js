import React from 'react'
import { NavLink } from 'react-router-dom'
import ChatPerson from './chatPerson'
import './scss/chat.scss'


function Chat (){
  return(
    <>
    <main className="chat">
      <h1>Сообщения</h1>
      <div className='chat_list'>
        <NavLink to='/user/chat'><ChatPerson/></NavLink> 
        <NavLink to='/user/chat'><ChatPerson/></NavLink> 
        <NavLink to='/user/chat'><ChatPerson/></NavLink> 
      </div>
    </main>
    </>
  )
}


export default Chat