import React, {useContext} from "react"
import Logo from "./logo"
import {NavLink} from "react-router-dom"
import { FormContex } from '../contextApp'
import {useHttp} from '../../hooks/http.hook'





function Navbarmobile (props){  
  const TOKENS_KEY='tokens'
  const {request} = useHttp()
  const {isAuthen, setAccessToken} = useContext(FormContex) 

 const handelClick = () =>{
    props.value.openAuth(true)
    props.value.openMobileMenu()
  }


  return (
    <div className="wrapper_mobile">
      <div className="wrapper_mobile_logo">
      <Logo/>
      <img className="wrapper_mobile_logo_close" src='../src/img/close.svg' onClick={props.value.openMobileMenu}/>
      </div>
      <nav className="wrapper_mobile_nav">
        <ul className="wrapper_mobile_nav_list">
        <li className="wrapper_mobile_nav_list" onClick={props.value.openMobileMenu}>{(isAuthen)?<NavLink  to="/booking" >Бронирования</NavLink>:<NavLink to="/about">О нас</NavLink>}</li>
        <li className="wrapper_mobile_nav_list" onClick={props.value.openMobileMenu}>{(isAuthen)?<NavLink to="/myAuto" >Мои автомобили</NavLink>:<NavLink to="/recovery"  >Условия</NavLink>}</li>
        <li className="wrapper_mobile_nav_list" onClick={props.value.openMobileMenu} >{(isAuthen)?<NavLink to="/chat">Сообщения</NavLink>:<NavLink to="/faq">Частые вопросы</NavLink>}</li>
        </ul>
      </nav>
      <button className="wrapper_mobile_button" disabled={(props.value.diss||props.value.rec)?true:false} onClick={handelClick}>Войти</button>
    </div>
  )
}

export default Navbarmobile