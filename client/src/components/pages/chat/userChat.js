import React from 'react'
import Backarrow from '../../backarrow/backArrow'
import './scss/userChat.scss'

function UserChat (){
const backArrowClassName ='user_chat_user_back'
const backLink = '/chat'

  return(
    <>
    <div className='user_chat'>
      <div className='user_chat_user'>
        <Backarrow name={backArrowClassName}  value={backLink}/>
        <p>Иван И.</p>
      </div>
      <div className='user_chat_chatWindow'>                
      </div>
      <form className='user_chat_form'>

      </form>
    </div>
    </>
  )
}


export default UserChat