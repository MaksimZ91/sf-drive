import React from 'react'
import Option from '../../options/option'


function BookingDopOptions () {

    const nameClass = 'booking_cart_dopOptions_options'
    
    const optionBabyChait = {
      cost:1000,
      titel:'Детское кресло',
      text:'Владелец установит своё детское кресло в автомобиль',
      name:'babyChair',
      className: nameClass,      
      checked:false
    }
    
    const optionDeliveryAuto = {
      cost:1000,
      titel:'Доставка автомобиля',
      text:'Владелец доставит автомобиль в любую удобную для вас точку города',
      name:'deliveryAuto',
      className: nameClass,
      checked:false
      
    }
    
    const optionClose = {
      cost:1000,
      titel:'Завершение аренды в любом месте',
      text:'Владелец приедет за автомобилем в любую точку города',
      name:'close',
      className: nameClass,
      checked:false
    }
    
    const optionFullTank = {
      cost:1000,
      titel:'Полный бак',
      text:'Владелец заправит полный бак перед сдачей автомобиля в аренду',
      name:'fullTank',
      className: nameClass,
      checked:false
    }
    
    return(
        <>
        <section className='booking_cart_dopOptions'>
            <p>Дополнительные услуги</p>
            <Option settings={optionBabyChait} />
            <Option settings={optionDeliveryAuto} />
            <Option settings={optionClose}/>
            <Option settings={optionFullTank}/>            
        </section>
        </>
    )
}

export default BookingDopOptions