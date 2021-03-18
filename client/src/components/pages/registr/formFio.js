import React, { useContext, useState } from 'react'
import Calendarb from './calendar'
import { FormContex } from './formContex'





function Formfio (props){
  const name = "date"
  const calendName='registr_about_form_calendarb'
  const {form} = useContext(FormContex)
  const {onChangeInput} =useContext(FormContex)
  const [valid, setValid]=useState(false)
  const [hide, setHied]=useState(false)
  const [empty, setEmpty]=useState(false)

 
  const handelEmpty = event => {
    event.target.value?setEmpty(true):setEmpty(false)}
  
const isValidated = event =>{
  handelEmpty(event)
  const validEmail= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  validEmail.test(String(event.target.value))?setValid(true):setValid(false)}

  

  
  return(
   
    <>
     <form className="registr_about_form" >
     <p className="registr_about_form_info">Информация о вас</p>
     <p>ФИО<input  className="registr_about_form_text" name='fio' defaultValue={form.fio}  onChange={onChangeInput}  type="text" placeholder="ФИО полностью"/></p>
     <p>Дата рождения<input className="registr_about_form_date" type="text"  defaultValue={form.date}  onClick={()=>  setHied(!hide)}   placeholder="00.00.0000"/></p>
     {hide?<Calendarb value={{name,calendName, setHied}}/>:''}
     <p>Электронная почта<input  className={(empty&&!valid)?"registr_about_form_email active":"registr_about_form_email"} type="email" onChange={onChangeInput} onBlur={isValidated}  name='email' defaultValue={form.email}  placeholder="mail@example.com"/></p>
     {(empty&&!valid)?<span className="registr_about_form_warn">Не верная почта</span>:''}
     <p>Телефон<input className="registr_about_form_phone" type="tel" name='phone'   onChange={onChangeInput} defaultValue={form.phone}  placeholder="+7 900 000-00-00"/></p>
    </form>
     </>
    

     
  )

}

export default Formfio