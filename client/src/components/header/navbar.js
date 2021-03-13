import React from "react"
import {NavLink} from "react-router-dom"



function Navbar (props){
  
 const handelClick = () =>{
    props.value.openAuth(true)
  }

  return (
    <div className="nav_wrapper">
      <nav className="header__nav">
        <ul className="header__list">
        <li className="header__link"><NavLink to="/about">О нас</NavLink></li>
        <li className="header__link"><NavLink to="/recovery">Условия</NavLink></li>
        <li className="header__link"><NavLink to="/faq">Частые вопросы</NavLink></li>
        </ul>
      </nav>
      <button className="header__button" disabled={(props.value.diss||props.value.rec)?true:false} onClick={handelClick}>Войти</button>
    </div>
  )
}

export default Navbar