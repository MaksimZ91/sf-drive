import React from 'react'



function ChatPerson (props){
  return(
    <>
    <div className='chat_list_perosn'>
      <div className='chat_list_perosn_wrapper'>
        <img className='chat_list_perosn_wrapper_img' src='./src/img/personChat.svg'/>
        <div className='chat_list_perosn_wrapper_user'>
          <div className='chat_list_perosn_wrapper_user_name'>
            <p>Иван И.</p>
            <img src='./src/img/redDot.svg'/>
          </div>
          <p className='chat_list_perosn_wrapper_user_auto'>Hyundai Solaris, 2018</p>
        </div>
      </div>
      <p className='chat_list_perosn_date'>12.05.2020</p>
    </div>

    </>
  )
}


export default ChatPerson