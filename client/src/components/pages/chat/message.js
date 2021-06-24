import React from 'react'


function Message (props){
    return(
        <>
        <div className='user_chat_chatWindow_message'>
            <img className='user_chat_chatWindow_message_img' />
            <div className='user_chat_chatWindow_message_wrapper'>            
                <p className='user_chat_chatWindow_message_wrapper_text'>Планирую посетить Санкт-Петербург, покататься по городу, съездить в Выборг и Петергоф.</p>
            <div className='user_chat_chatWindow_message_wrapper_date'>12:33</div>
            </div>           
        </div>
        </>
    )
}

export default Message