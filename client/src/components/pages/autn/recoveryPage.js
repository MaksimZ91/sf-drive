import React, {useState, useEffect} from 'react'
import {validation} from '../../../js/validationForm'
import {useHttp} from '../../../hooks/http.hook'



function Recovery (props) {
  const [passHide, setPassHide]=useState(false)
  const [newPass, setNewPasse]=useState(false)
  const [formRecov, setFormRecov]=useState({ email:"", password:"", newPassword:""})
  const [validRecov, setValidRecov]=useState(false)
  const [warning, setWarning]=useState (false)
  const {request, error} = useHttp()


      const onChangeInput = event => {           
        setFormRecov({ ...formRecov, [event.target.name]: event.target.value })             
    } 
    
    const confirmPassHandler = () =>{
      if (formRecov.password==formRecov.newPassword){
        setFormRecov({...formRecov, password:formRecov.newPassword})
        setWarning(false)
      }else{
        setWarning(true)
      }    
    } 

     useEffect(()=>{setValidRecov((validation(formRecov)))},[formRecov])
  
 
    const handelHidePass = () =>{
      setPassHide(!passHide)  
    }
    const handelHideNewPass = () =>{
      setNewPasse(!newPass)  
    }   

  const handelClick =()=>{
    props.value.recov(false) 

  }
  const backStep = () =>{
    props.value.backStep(true)
    props.value.recov(false) 
  }

  const authorHandler = async () => {
    try {
        const data = await request('http://localhost:5000/author/recov','POST',{...formRecov})
        console.log(data)      
    } catch (e) {
        console.log(e)            
    }
    handelClick()
}
    return(
        <>
        
        <div className="recovery">
          <div className="recovery_control_wrapper">
            <img className="recovery_control_wrapper_backArrow" src="../src/img/backArrow.svg" onClick={backStep}/>       
            <img className="recovery_control_wrapper_close" src='../src/img/close.svg' onClick={handelClick}/>
          </div>
            <img className="recovery_img" src='../src/img/recovery.svg'/>
            <img className="recovery_img_mobile" src="../src/img/recovery_mobile.svg"/>
            <form className="recovery_form">
                <p className="recovery_form_titel">Восстановление пароля</p>
                <p className="recovery_form_info">Мы отправим ссылку для восстановления пароля<br/>
                на вашу электронную почту</p>
                <div className="recovery_form_email">
                    <input tupe='text' className='email_author' name="email" value={formRecov.email} onChange={onChangeInput}  required/>
                    <label className="email_author">Электронная почта</label>
                </div>
                <div className={warning?"recovery_form_newPassword active":'recovery_form_newPassword'}>
                    <input  className='password_author' name="password" value={formRecov.password}  type={passHide?'password':'text'} onClick={handelHidePass}   onBlur={confirmPassHandler} onChange={onChangeInput} required />
                    <label className={warning?"password_author active ":'password_author'}>Новый пароль</label>                  
                </div>
                <div className={warning?"recovery_form_secondNewPassword active":'recovery_form_secondNewPassword'}>
                    <input tupe='password' className='password_second' name="newPassword" value={formRecov.newPassword}  type={newPass?'password':'text'}onClick={handelHideNewPass}  onBlur={confirmPassHandler} onChange={onChangeInput}  required />
                    <label className={warning?"password_second active":'"password_second'}>Повторите ввод нового пароля</label>                  
                </div>
                    {warning?<p className="recovery_form_warn">Пароли не совпадают</p>:''}
                <input className="recovery_form_button" type="button" value='Отправить' onClick={authorHandler} disabled={(validRecov||warning)}/>                
            </form>            
        </div>+
        

        </>

    )
}



export default Recovery