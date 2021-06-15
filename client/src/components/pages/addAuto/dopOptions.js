import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDopAutoOptionsForm } from '../../../../redux/actions/actions'
import Option from '../../options/option'


function Dopoptions (){  
  const addAutoOptions = useSelector((state)=>{
    return state.newAuto.dopOptions
})

const nameClass = 'options_auto_dopform'


const optionBabyChait = {
  cost:1000,
  titel:'Детское кресло',
  text:'Сдавайте кресло в аренду и получайте дополнительный заработок',
  name:'babyChair',
  state:addAutoOptions,
  addOptions:addDopAutoOptionsForm,
  className: nameClass,
  checked:true
}

const optionDeliveryAuto = {
  cost:1000,
  titel:'Доставка автомобиля',
  text:'Привезите автомобиль в удобное для арендатора место и получите доход',
  name:'deliveryAuto',
  state:addAutoOptions,
  addOptions:addDopAutoOptionsForm,
  className: nameClass,
  checked:true
}

const optionClose = {
  cost:1000,
  titel:'Завершение аренды в любом месте',
  text:'Заберите автомобиль в удобном для арендатора месте за доп. доход',
  name:'close',
  state:addAutoOptions,
  addOptions:addDopAutoOptionsForm,
  className: nameClass,
  checked:true
}

const optionFullTank = {
  cost:1000,
  titel:'Полный бак',
  text:'Заправьте полный бак перед сдачей в аренду',
  name:'fullTank',
  state:addAutoOptions,
  addOptions:addDopAutoOptionsForm,
  className: nameClass,
}

  return(
    <> 
      <form className='options_auto_dopform' >
        <p className='options_auto_dopform_info'>Дополнительные услуги</p>
        <Option settings={optionBabyChait}/>
        <Option settings={optionDeliveryAuto}/>
        <Option settings={optionClose}/>
        <Option settings={optionFullTank}/>
      </form>   
    </>
  )
}

export default Dopoptions

