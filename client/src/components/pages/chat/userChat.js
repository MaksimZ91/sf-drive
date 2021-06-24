import React from 'react'
import Backarrow from '../../backarrow/backArrow'
import './scss/userChat.scss'
import Message from './message'

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
        <Message />   
        <Message />   
        <Message />                
      </div>
      <form className='user_chat_form'>
        <img className='user_chat_form_file' src='../src/img/fileIcon.svg'/>
        <input className='user_chat_form_input' type='text' name='text'/>
        <button className='user_chat_form_button'><img className='user_chat_form_button_img' src='../src/img/buttonImg.svg'></img></ button>
      </form>
    </div>
    </>
  )
}


export default UserChat