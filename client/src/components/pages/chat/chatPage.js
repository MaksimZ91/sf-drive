import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHttp } from '../../../hooks/http.hook'
import ChatPerson from './chatPerson'
import './scss/chat.scss'


function Chat (){
  const { request } = useHttp()
  const [chats, setChats] = useState([])

  useEffect( async ()=>{    
      const result = await request('http://localhost:5000/chat/findeChat')
      setChats(result)
      console.log(chats) 
  },[])


  return(
    <>
    <main className="chat">
      <h1>Сообщения</h1>
      <div className='chat_list'>
        {chats.map(e=>
          <NavLink to='/user/chat'><ChatPerson value={e}/></NavLink> 
          )}        
      </div>
    </main>
    </>
  )
}


export default Chat