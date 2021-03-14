import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {validation} from '../js/validationForm.js'


function Authorpage (props) {
    const [formAuth, setFormAuth]=useState({ email:'', password:''})
    const [validAuth, setValidAuth]=useState(false)
  
      const onChangeInput = event => {
        setFormAuth({ ...formAuth, [event.target.name]: event.target.value })   
    }  

     useEffect(()=>{setValidAuth((validation(formAuth)))},[formAuth])
   
     
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
                <div className="authorization_form_email ">
                    <input tupe='text' name='email' className='email_author ' value={formAuth.email} onChange={onChangeInput} required/>
                    <label className="email_author">Электронная почта</label>
                </div>
                <div className="authorization_form_password ">
                    <input tupe='password' className='password_author ' name='password' value={formAuth.password} onChange={onChangeInput}  required />
                    <label className="password_author ">Пароль</label>
                   <span className="authorization_form_password_recov"  onClick={handelClick}>Забыли?</span>
                </div>
                <input className="authorization_form_button" type="submit" value='Войти' disabled={validAuth}/>                
            </form>
            <div className="authorization_registr" onClick={Close}>
                    <NavLink to="/registr">Зарегистрироваться</NavLink>
            </div>
        </div>
       

        </>

    )
}



export default Authorpage