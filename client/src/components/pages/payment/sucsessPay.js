import React from 'react'
import { NavLink } from "react-router-dom"
import './scss/sucsess.scss'

function SucsessPay () {
  return(
    <>
    <main className='sucsessPay'>
      <div className='sucsessPay_wrapper'>
        <img className='sucsessPay_wrapper_img' src='./src/img/order_sucsess.svg'/>
        <h2 className='sucsessPay_wrapper_titel'>Успех!</h2>
        <p className='sucsessPay_wrapper_text'>Оплата прошла успешно</p>
      </div>
      <NavLink to='/'><button className='sucsessPay_button'>Перейти на главную</button></NavLink>
    </main>
    </>
  )
}


export default SucsessPay