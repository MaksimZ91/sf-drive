import React, { useContext, useState } from 'react'
import { FormContex } from './formContex'



function Password (){
  const [hide, setHide]=useState(false)
  const [confirmHide, setConfirmHide]=useState(false)
  const [password, setPassword]=useState({pass:'',secondPassword:''})
  const [warning, setWarning]=useState (false)
  const {form} = useContext(FormContex)
  const {setForm} =useContext(FormContex)

const confirmPassHandler = () =>{
  if (password.pass==password.secondPassword){
    setForm({...form, password:password.pass})
    setWarning(false)
  }else{
    setWarning(true)
  }

}
  const hadelConfirm = event =>{
    setPassword({...password, [event.target.name]:event.target.value})
  }
  
  const handelHidePass = () =>{
    setHide(!hide)  
  }
  const handelHideConf = () =>{
    setConfirmHide(!confirmHide)  
  }



    return(
        <>
     <form className="registr_about_password" >
     <p>Пароль</p>
     <p>Придумайте пароль<input className={(warning)?"registr_about_password_curr active":"registr_about_password_curr"} type={hide?'password':'text'} name='pass' value={password.pass} onClick={handelHidePass} onChange={hadelConfirm}     onBlur={confirmPassHandler} placeholder="•••••••••••••••••••" /></p>
     <p>Повторите пароль<input className={(warning)?"registr_about_password_conf active":"registr_about_password_conf"} type={confirmHide?'password':'text'} name='secondPassword'value={password.secondPassword} onClick={handelHideConf} onChange={hadelConfirm}  onBlur={confirmPassHandler} placeholder="•••••••••••••••••••" /></p>
     {(warning)?<span className="registr_about_password_warning">Пароли не совпадают</span>:''}
    </form>
        </>
    )
}


export default Password