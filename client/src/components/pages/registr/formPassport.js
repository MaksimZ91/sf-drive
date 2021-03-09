import React, { useContext, useState } from "react"
import { FormContex } from './formContex'
import Calendarb from './calendar'



function Passport (){
  const {form} = useContext(FormContex)
  const name = "passDate"
  const calendName='registr_about_data_calendarb'
  const {onChangeInput} =useContext(FormContex)
  const [hide, setHied]=useState(false)
  const handelCalen = () =>{
    setHied(!hide)
}
  return (
    <>
    <form className="registr_about_data">
   <p>Паспорт</p>
   <p>Серия и номер<input className="registr_about_data_number" type="text"  name='number' defaultValue={form.number} onChange={onChangeInput} placeholder="0000 000000"/></p>
   <p>Дата выдачи<input className="registr_about_data_date" type="text"  onClick={handelCalen} defaultValue={form.passDate} onChange={onChangeInput} placeholder="00.00.0000"/></p>
   {hide?<Calendarb value={{name,calendName }}/>:''}
   <p>Кем выдан<input className="registr_about_data_about" type="text"  name='about' defaultValue={form.about} onChange={onChangeInput} placeholder="Название органа выдавшего паспорт"/></p>
   <p>Код подразделения<input className="registr_about_data_cod" type="text" name='cod' defaultValue={form.cod} onChange={onChangeInput} placeholder="000-000"/></p>
    </form>  
    </>

  )
}

export default Passport