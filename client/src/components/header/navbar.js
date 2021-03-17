import React, {useContext} from "react"
import {NavLink} from "react-router-dom"
import { FormContex } from '../contextApp'



function Navbar (props){
  const {isAuthen, setAccessToken} = useContext(FormContex)
  
 const handelClick = () =>{
    props.value.openAuth(true)
  }

  const onClear = () =>{
    localStorage.removeItem('tokens')
    setAccessToken(null)                 //временно для теста
  }

  return (
    <div className="nav_wrapper">
      <nav className="header__nav">
        <ul className="header__list">
        <li className="header__link">{(isAuthen)?<NavLink to="/">Бронирования</NavLink>:<NavLink to="/about">О нас</NavLink>}</li>
        <li className="header__link">{(isAuthen)?<NavLink to="/">Мои автомобили</NavLink>:<NavLink to="/recovery">Условия</NavLink>}</li>
        <li className="header__link">{(isAuthen)?<NavLink to="/">Сообщения</NavLink>:<NavLink to="/faq">Частые вопросы</NavLink>}</li>
        </ul>
      </nav>
      {(isAuthen)?<img className="header_avatar" onClick={onClear} src='../src/img/avatar.svg'/>:<button className="header__button" disabled={(props.value.diss||props.value.rec)?true:false} onClick={handelClick}>Войти</button>}
    </div>
  )
}

export default Navbar