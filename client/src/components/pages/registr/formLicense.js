import React, {useState, useContext} from 'react'
import { FormContex } from './formContex'
import Calendarb from './calendar'


function License () {
  const name = 'dateLicense' 
  const calendName='registr_about_info_calendarb'
  const {form} = useContext(FormContex)
  const {onChangeInput,useValidation} =useContext(FormContex)
  const [hide, setHied]=useState(false)
  const handelCalen = () =>{
    setHied(!hide)
}
  

  return (
    <>
    <form className="registr_about_info">
    <p>Водительское удостоверение</p>
    <p>Серия и номер<input className="registr_about_info_number" name="numberLicense" defaultValue={form.numberLicense} onChange={onChangeInput}  type='text' placeholder="0000 000000"/></p>
    <p>Дата выдачи<input className="registr_about_info_date" defaultValue={form.dateLicense} onClick={handelCalen}  onChange={onChangeInput}  type="text" placeholder="00.00.0000"/></p>
    {hide?<Calendarb value={{name,calendName }}/>:''}
    </form> 

    </>
  )
}

export default License