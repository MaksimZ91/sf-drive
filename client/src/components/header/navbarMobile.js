import React from "react"
import Logo from "./logo"
import {NavLink} from "react-router-dom"



function Navbarmobile (props){  
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
        <li className="wrapper_mobile_nav_list" onClick={props.value.openMobileMenu}><NavLink to="/about">О нас</NavLink></li>
        <li className="wrapper_mobile_nav_list" onClick={props.value.openMobileMenu}><NavLink to="/recovery">Условия</NavLink></li>
        <li className="wrapper_mobile_nav_list" onClick={props.value.openMobileMenu} ><NavLink to="/faq">Частые вопросы</NavLink></li>
        </ul>
      </nav>
      <button className="wrapper_mobile_button" disabled={(props.value.diss||props.value.rec)?true:false} onClick={handelClick}>Войти</button>
    </div>
  )
}

export default Navbarmobile