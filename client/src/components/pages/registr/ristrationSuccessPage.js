import React from 'react'
import { NavLink } from 'react-router-dom'



function RegistartionSuccess (){
  return(
    <>
    <main className='confirmation'>
      <img className='confirmation_img' src='../src/img/registrsuccess.svg'/>
      <h2 className='confirmation_titel'>Успех!</h2>
      <p className='confirmation_text'>Вы успешно зарегистрировались. Дождитесь проверки 
      документов и начните пользоваться сервисом.</p>
      <NavLink to='/'><button className='confirmation_button'>Перейти на главную</button></NavLink>      
    </main>
    </>
  )
}


export default RegistartionSuccess