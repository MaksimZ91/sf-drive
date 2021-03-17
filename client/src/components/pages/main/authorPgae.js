import React, {useState, useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {validation} from '../js/validationForm.js'
import {useHttp} from '../../../hooks/http.hook'
import { FormContex } from '../../contextApp'




function Authorpage (props) {
    const {login} = useContext(FormContex)
    const [formAuth, setFormAuth]=useState({ email:'', password:''})
    const [validAuth, setValidAuth]=useState(false)
    const {request, error} = useHttp()
    
    
    
  
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

    const authorHandler = async () => {
        try {
            const data = await request('http://localhost:5000/api/author','POST',{...formAuth})
            console.log(data.userId)
            login(data.accessToken,data.refreshToken, data.userId)
            
        } catch (e) {
            console.log(e)            
        }
        Close()
    }

    return(
        <>
     
        <div className="authorization">
            <img className="authorization_close" src='../src/img/close.svg' onClick={Close}/>
            <img className="authorization_img" src='../src/img/undraw_sign_in.svg'    />
            <img className="authorization_img_mobile" src="../src/img/undraw_sign_in_mobile.svg"/>
            <form className="authorization_form">
                <p className="authorization_form_titel ">Авторизация</p>
                <p className="authorization_form_warn">Не верная почта или пароль</p>
                <div className="authorization_form_email ">
                    <input tupe='text' name='email' className='email_author ' value={formAuth.email} onChange={onChangeInput} required/>
                    <label className="email_author">Электронная почта</label>
                </div>
                <div className="authorization_form_password ">
                    <input tupe='password' className='password_author ' name='password' type="password" value={formAuth.password} onChange={onChangeInput}  required />
                    <label className="password_author ">Пароль</label>
                   <span className="authorization_form_password_recov"  onClick={handelClick}>Забыли?</span>
                </div>
                <input className="authorization_form_button" type="button" value='Войти'  onClick={authorHandler}  disabled={validAuth}/>                
            </form>
            <div className="authorization_registr" onClick={Close}>
                    <NavLink to="/registr">Зарегистрироваться</NavLink>
            </div>
        </div>
       

        </>

    )
}



export default Authorpage