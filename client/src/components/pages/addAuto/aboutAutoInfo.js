import React from 'react'



function Aboutautoinfo (){
  return(
    <>
    <form className="new_auto_form" >
    <p className="new_auto_form_info" >Информация об автомобиле</p>
    <p>Марка<input className="new_auto_form_mark" /></p>
    <p>Модель<input className="new_auto_form_model"/></p>
    <p>Год выпуска<input className="new_auto_form_year"/></p>
    <p>Гос. номер<input className="new_auto_form_number"/></p>
    <p>VIN<input className="new_auto_form_vin"/></p>
    <p>Цвет<input className="new_auto_form_collor"/></p>
    <p>Тип двигателя<input className="new_auto_form_motor"/></p>
    <p>Объем<input className="new_auto_form_volume"/></p>
    <p>Мощность<input className="new_auto_form_power"/><input className="new_auto_form_powerkwt"/></p>
    <p>Трансмиссия<input className="new_auto_form_transmission"/></p>
    <p>Пробег<input className="new_auto_form_mileage"/></p>
    <p>Серия и номер ПТС<input className="new_auto_form_pts"/></p>
    <p>Серия и номер СТС<input className="new_auto_form_sts"/></p>
    </form>
    </>
  )
}

export default Aboutautoinfo