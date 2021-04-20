import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAutoForm } from '../../../../redux/actions/actions'
import cars from '../../../js/cars.js'



function Aboutautoinfo (){
  const dispatch = useDispatch()
  const addAuto = useSelector((state)=>{
    return state.newAuto.addAuto
})


 const handleChange = e => {
  dispatch(addAutoForm(addAuto, e))
  }

  


  return(
    <>
    <form className="new_auto_form" >
    <p className="new_auto_form_info" >Информация об автомобиле</p>
    <p>Марка<select className="new_auto_form_mark" name='mark' value={addAuto.mark}  onChange={handleChange}><option>Выберите марку автомобиля</option>{Object.keys(cars.list).map(e =><option value={e}>{e}</option>)}</select></p>
    <p>Модель<select className="new_auto_form_model" name='model' value={addAuto.model}  onChange={handleChange}><option>Выберите модель автомобиля</option>{cars.list[addAuto.mark].map(e =><option value={e}>{e}</option>)}</select></p>
    <p>Год выпуска<input className="new_auto_form_year" placeholder='0000' name='year' value={addAuto.year} onChange={handleChange}/></p>
    <p>Гос. номер<input className="new_auto_form_number" placeholder='А000АА000' name='number' value={addAuto.number} onChange={handleChange}/></p>
    <p>VIN<input className="new_auto_form_vin" placeholder='ABCD1234567890' name='vin' value={addAuto.vin} onChange={handleChange}/></p>
    <p>Цвет<input className="new_auto_form_collor" placeholder='' name='collor' value={addAuto.collor} onChange={handleChange}/></p>
    <p>Тип двигателя<select className="new_auto_form_motor" name='motor' value={addAuto.motor} onChange={handleChange} >
      <option>Выберите тип двигателя</option>
      <option value={'Бензин'}>Бензин</option>
      <option value={'Дизель'}>Дизель</option>
      </select>
      </p>
    <p>Объем<input className="new_auto_form_volume" placeholder='1,0 л' name='volume' value={addAuto.volume} onChange={handleChange}/></p>
    <p>Мощность<input className="new_auto_form_power" placeholder='100 л.с.' name='power' value={addAuto.power} onChange={handleChange}/><input className="new_auto_form_powerkwt" placeholder='' name='powerkwt' value={addAuto.powerkwt}/></p>
    <p>Трансмиссия<select className="new_auto_form_transmission" name='transmission' value={addAuto.transmission} onChange={handleChange}>
      <option>Выберите тип трансмиссии</option>
      <option value="Автоматическая">Автоматическая</option>
      <option value="Механическая">Механическая</option>
      <option value="Робот">Робот</option>
      <option value="Вариатор">Вариатор</option>
      </select>
      </p>
    <p>Пробег<input className="new_auto_form_mileage" placeholder='10 000 км' name='mileage' value={addAuto.mileage} onChange={handleChange}/></p>
    <p>Серия и номер ПТС<input className="new_auto_form_pts" placeholder='00 АА 000000' name='pts' value={addAuto.pts} onChange={handleChange}/></p>
    <p>Серия и номер СТС<input className="new_auto_form_sts" placeholder='00 АА 000000' name='sts' value={addAuto.sts} onChange={handleChange}/></p>
    </form>
    </>
  )
}

export default Aboutautoinfo