import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAutoForm } from '../../../../redux/actions/actions'



function Priceauto (){
  const dispatch = useDispatch()
  const addAuto = useSelector((state)=>{
    return state.auto.addAuto
})

 const handleChange = e => {
  dispatch(addAutoForm(addAuto, e))
  }

  return(
    <>
    <form className="new_auto_price" >
    <p className="new_auto_price_info" >Стоимость аренды</p>
    <p>Обычная цена<input className="new_auto_price_current" name='price' value={addAuto.price} onChange={handleChange} placeholder='1 500 ₽/сутки'/></p>
    <p>Цена при аренде на 3 дня<input className="new_auto_price_current" name='priceThreeDays' value={addAuto.priceThreeDays} onChange={handleChange}  placeholder ='1 400 ₽/сутки'/></p>
    <p>Цена при аренде более 5 дней<input className="new_auto_price_current" name='priceFiveDays' value={addAuto.priceFiveDays} onChange={handleChange}  placeholder ='1 300 ₽/сутки'/></p>  
    </form>
    </>
  )
}

export default Priceauto