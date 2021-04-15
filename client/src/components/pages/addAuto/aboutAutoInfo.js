import React, { useEffect, useState } from 'react'
import cars from '../../../js/cars.js'



function Aboutautoinfo (){ 
  const [mark, setMark]=useState("AC")
  const [model, setModel]=useState(cars.list.AC[0])


 const handleChangeMark = e => {
    setMark(e.target.value);
    setModel(cars.list[e.target.value][0])
  }

  const handleChangeModel = e => {
    setModel(e.target.value);
  }


  console.log(mark, model)





  //{cars.list[mark].map(e =><option value={e}>{e}</option>)}

 
 
  
 
  return(
    <>
    <form className="new_auto_form" >
    <p className="new_auto_form_info" >Информация об автомобиле</p>
    <p>Марка<select className="new_auto_form_mark" value={mark} onChange={handleChangeMark}>{Object.keys(cars.list).map(e =><option value={e}>{e}</option>)}</select></p>
    <p>Модель<select className="new_auto_form_model" value={model} onChange={handleChangeModel}>{cars.list[mark].map(e =><option value={e}>{e}</option>)}</select></p>
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