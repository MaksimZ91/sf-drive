import React from 'react'
import { NavLink } from 'react-router-dom'


function Authorpage (props) {
    console.log(props)
    const diss=true
    const handelClick =()=>{
        props.value.recov(true)
        props.value.closeAuthor(false)
      }
    const Close = ()=>{
        props.value.closeAuthor(false)
    }
   
    return(
        <>
     
        <div className="authorization">
            <img className="authorization_close" src='../src/img/close.svg' onClick={Close}/>
            <img className="authorization_img" src='../src/img/undraw_sign_in.svg'/>
            <img className="authorization_img_mobile" src="../src/img/undraw_sign_in_mobile.svg"/>
            <form className="authorization_form">
                <p className="authorization_form_titel ">Авторизация</p>
                <p className="authorization_form_warn">Не верная почта или пароль</p>
                <div className="authorization_form_email">
                    <input tupe='text' className='email_author' required/>
                    <label className="email_author">Электронная почта</label>
                </div>
                <div className="authorization_form_password">
                    <input tupe='password' className='password_author' required />
                    <label className="password_author ">Пароль</label>
                   <span className="authorization_form_password_recov" onClick={handelClick}>Забыли?</span>
                </div>
                <input className="authorization_form_button" type="submit" value='Войти' disabled={diss}/>                
            </form>
            <div className="authorization_registr">
                    <NavLink to="/regist">Зарегистрироваться</NavLink>
            </div>
        </div>
       

        </>

    )
}



export default Authorpage