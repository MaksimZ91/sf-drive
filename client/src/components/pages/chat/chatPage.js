import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToUserID } from '../../../../redux/actions/actions'
import { useHttp } from '../../../hooks/http.hook'
import ChatPerson from './chatPerson'
import './scss/chat.scss'


function Chat (){
  const dispatch = useDispatch()
  const { request } = useHttp()
  const [chats, setChats] = useState([])

  useEffect( async ()=>{  
      dispatch(addToUserID(''))
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
          <NavLink to='/user/chat' onClick={() => dispatch(addToUserID((e.toUser.id)))}><ChatPerson value={e}/></NavLink> 
          )}        
      </div>
    </main>
    </>
  )
}


export default Chat