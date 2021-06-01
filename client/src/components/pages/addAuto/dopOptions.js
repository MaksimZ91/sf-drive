import React from 'react'
import { useSelector } from 'react-redux'
import Option from '../../options/option'


function Dopoptions (){ 
  const addAutoOptions = useSelector((state)=>{
    return state.newAuto.dopOptions
})
const optionBabyChait = {
  cost:1000,
  titel:'Детское кресло',
  text:'Сдавайте кресло в аренду и получайте дополнительный заработок',
  value:addAutoOptions.babyChair,
  name:'babyChair',
  className:'options_auto_dopform'
}

const optionDeliveryAuto = {
  cost:1000,
  titel:'Доставка автомобиля',
  text:'Привезите автомобиль в удобное для арендатора место и получите доход',
  value:addAutoOptions.deliveryAuto,
  name:'deliveryAuto',
  className:'options_auto_dopform'
}

const optionClose = {
  cost:1000,
  titel:'Завершение аренды в любом месте',
  text:'Заберите автомобиль в удобном для арендатора месте за доп. доход',
  value:addAutoOptions.close,
  name:'close',
  className:'options_auto_dopform'
}

const optionFullTank = {
  cost:1000,
  titel:'Полный бак',
  text:'Заправьте полный бак перед сдачей в аренду',
  value:addAutoOptions.fullTank,
  name:'fullTank',
  className:'options_auto_dopform'
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

