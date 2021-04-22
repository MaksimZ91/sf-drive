import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAutoOptionsForm } from '../../../../redux/actions/actions'


function Dopoptions (){
  const dispatch = useDispatch()
  const addAutoOptions = useSelector((state)=>{
    return state.newAuto.addAutoOptions
})

 const handleChange = e => {
  dispatch(addAutoOptionsForm(addAutoOptions, e))
  }



  return(
    <> 
    <form className="options_auto_dopform" >
    <p className="new_auto_dopform_info" >Дополнительные услуги</p>
    <div className="options_auto_dopform_wrapper" >
      <div className="options_auto_dopform_wrapper_text">
        <p>Детское кресло</p>
        <p>Сдавайте кресло в аренду и получайте дополнительный заработок</p>
      </div>
      <div className="options_auto_dopform_wrapper_price">
        <p>1 000 ₽</p>      
       <label className="options_auto_dopform_wrapper_price_switch">
        <input className='options_auto_dopform_wrapper_price_switch_checkbox' type="checkbox" name='babyChair' value={addAutoOptions.babyChair} onChange={handleChange}/>
        <span className="options_auto_dopform_wrapper_price_switch_slider"></span>
      </label> 
      </div>     
    </div>
    <div className="options_auto_dopform_wrapper" >
      <div className="options_auto_dopform_wrapper_text">
        <p>Доставка автомобиля</p>
        <p>Привезите автомобиль в удобное для арендатора место и получите доход</p>
      </div>
      <div className="options_auto_dopform_wrapper_price">
        <p>1 000 ₽</p>      
       <label className="options_auto_dopform_wrapper_price_switch">
        <input className='options_auto_dopform_wrapper_price_switch_checkbox' type="checkbox" name='deliveryAuto' value={addAutoOptions.deliveryAuto} onChange={handleChange}/>
        <span className="options_auto_dopform_wrapper_price_switch_slider"></span>
      </label> 
      </div>     
    </div>
    <div className="options_auto_dopform_wrapper" >
      <div className="options_auto_dopform_wrapper_text">
        <p>Завершение аренды в любом месте</p>
        <p>Заберите автомобиль в удобном для арендатора месте за доп. доход</p>
      </div>
      <div className="options_auto_dopform_wrapper_price">
        <p>1 000 ₽</p>      
       <label className="options_auto_dopform_wrapper_price_switch">
        <input className='options_auto_dopform_wrapper_price_switch_checkbox' type="checkbox" name='close' value={addAutoOptions.close} onChange={handleChange}/>
        <span className="options_auto_dopform_wrapper_price_switch_slider"></span>
      </label> 
      </div>     
    </div>
    <div className="options_auto_dopform_wrapper" >
      <div className="options_auto_dopform_wrapper_text">
        <p>Полный бак</p>
        <p>Заправьте полный бак перед сдачей в аренду</p>
      </div>
      <div className="options_auto_dopform_wrapper_price">
        <p>1 000 ₽</p>      
       <label className="options_auto_dopform_wrapper_price_switch">
        <input className='options_auto_dopform_wrapper_price_switch_checkbox' type="checkbox" name='fullTank' value={addAutoOptions.fullTank} onChange={handleChange}/>
        <span className="options_auto_dopform_wrapper_price_switch_slider"></span>
      </label> 
      </div>     
    </div>
    </form>   
    </>
  )
}

export default Dopoptions