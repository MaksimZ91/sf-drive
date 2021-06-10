import React   from 'react'
import {  useSelector } from 'react-redux'
import { addArendaOptions } from '../../../../redux/actions/actions'
import Option from '../../options/option'




function Arendaoptions (){
 
    const addAutoOptions = useSelector((state)=>{
        return {options:state.arenda.options, currenAutoOptions:state.auto.currentAuto.options[0]}
    })

    
    const nameClass = 'arenda_options'
    
    const optionBabyChait = {
      cost:1000,
      titel:'Детское кресло',
      text:'Владелец установит своё детское кресло в автомобиль',
      name:'babyChair',
      className: nameClass,
      state:addAutoOptions.options,
      addOptions:addArendaOptions
    }
    
    const optionDeliveryAuto = {
      cost:1000,
      titel:'Доставка автомобиля',
      text:'Владелец доставит автомобиль в любую удобную для вас точку города',
      name:'deliveryAuto',
      className: nameClass,
      state:addAutoOptions.options,
      addOptions:addArendaOptions
    }
    
    const optionClose = {
      cost:1000,
      titel:'Завершение аренды в любом месте',
      text:'Владелец приедет за автомобилем в любую точку города',
      name:'close',
      className: nameClass,
      state:addAutoOptions.options,
      addOptions:addArendaOptions
    }
    
    const optionFullTank = {
      cost:1000,
      titel:'Полный бак',
      text:'Владелец заправит полный бак перед сдачей автомобиля в аренду',
      name:'fullTank',
      className: nameClass,
      state:addAutoOptions.options,
      addOptions:addArendaOptions
    }
    
    return(
        <>
        {!(Object.keys(addAutoOptions.currenAutoOptions).length==0)?
        <section className='arenda_options'>
            <p className='arenda_options_info'>Дополнительные услуги</p>
            {addAutoOptions.currenAutoOptions.babyChair?<Option settings={optionBabyChait}/>:''}
            {addAutoOptions.currenAutoOptions.deliveryAuto?<Option settings={optionDeliveryAuto}/>:''}
            {addAutoOptions.currenAutoOptions.close?<Option settings={optionClose}/>:''}
            {addAutoOptions.currenAutoOptions.fullTank?<Option settings={optionFullTank}/>:''}
        </section>:
        ''}
        </>
    )
}

export default Arendaoptions