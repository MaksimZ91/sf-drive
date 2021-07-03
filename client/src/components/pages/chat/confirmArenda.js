import React from 'react'
import moment  from 'moment'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector } from 'react-redux'





function ConfirmArenda (props){
  const { request } = useHttp()
  const user = props.value.user
  const toUser =  props.value.toUser
  const arendaStaus = useSelector((state)=>{
    return state.arenda.status
  })


  const body = {
    arendaID:props.value.arendaID,
     status:'isActive',     
     user:user.id,
     toUser:toUser.id
  }


  const requestArenda = () =>{
   request('http://localhost:5000/chat/findeandupdate','POST', body)
  }


  if(arendaStaus.status == 'confirm'){
    return(
      <>
            <div className='user_chat_chatWindow_message requset' >
                <img className='user_chat_chatWindow_message_img requset' src='../src/img/systemImg.svg' />
                <div className='user_chat_chatWindow_message_wrapper requset'>            
                    <span className='user_chat_chatWindow_message_wrapper_text requset'>Подтвердите, когда начнёте аренду</span>
                <button className='user_chat_chatWindow_message_button requset' onClick={requestArenda}>Начать аренду</button> 
                </div>                       
            </div>
    </>
    )
  }else{
    return(
    <>
    </>
    )
  }
 
  
}

export default ConfirmArenda