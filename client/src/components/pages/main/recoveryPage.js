import React from 'react'



function Recovery (props) {
  const handelClick =()=>{
    props.value.recov(false) 

  }
  const backStep = () =>{
    props.value.backStep(true)
    props.value.recov(false) 
  }


    const diss=true
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
                    <input tupe='text' className='email_author' required/>
                    <label className="email_author">Электронная почта</label>
                </div>
                <div className="recovery_form_newPassword">
                    <input tupe='password' className='password_author' required />
                    <label className="password_author ">Новый пароль</label>                  
                </div>
                <div className="recovery_form_secondNewPassword">
                    <input tupe='password' className='password_second' required />
                    <label className="password_second">Повторите ввод нового пароля</label>                  
                </div>
                <input className="recovery_form_button" type="submit" value='Отправить' disabled={diss}/>                
            </form>            
        </div>
        

        </>

    )
}



export default Recovery