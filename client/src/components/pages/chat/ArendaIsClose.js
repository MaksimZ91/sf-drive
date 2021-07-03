import React from 'react'
import moment  from 'moment'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector } from 'react-redux'





function ArendaIsClose (props){
  const { request } = useHttp()
  const user = props.value.user
  const toUser =  props.value.toUser
  const arendaStaus = useSelector((state)=>{
    return state.arenda.status
  })
  const star = [1, 2, 3, 4, 5]

  const body = {
    arendaID:props.value.arendaID,
     status:'Send',     
     user:user.id,
     toUser:toUser.id
  }
  const loger = (e) =>{
    console.log(e.target.dataset.value)

  }


  const requestArenda = () =>{
   request('http://localhost:5000/chat/findeandupdate','POST', body)
  }

 
  if(arendaStaus.status == 'isClose'){
    return(
      <>
      {props.date?<div className='user_chat_chatWindow_date'>{moment(+props.value.createdAt).locale('ru').format('LL')}</div>:''}    
            <div className='user_chat_chatWindow_message requset'>
                <img className='user_chat_chatWindow_message_img requset' src='../src/img/systemImg.svg' />
                <div className='user_chat_chatWindow_message_wrapper requset'>            
                    <span className='user_chat_chatWindow_message_wrapper_text requset'>Оцените аренду. Всё ли хорошо? Оставьте отзыв автомобилю и владельцу, и вы сможете увидеть отзыв о себе</span>
                    <div className='user_chat_chatWindow_message_wrapper_stars requset'>{star.map(e => 
                    <img  src='../src/img/chatstar.svg' data-value={e} onClick={loger}/>)}</div>
                <button className='user_chat_chatWindow_message_button requset' onClick={requestArenda}>Написать отзыв</button>    
                
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

export default ArendaIsClose