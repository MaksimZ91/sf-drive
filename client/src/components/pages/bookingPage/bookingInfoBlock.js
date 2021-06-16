import React from 'react'
import UserBlock from '../../user/user'
import { fixDate } from '../../../js/fixday'


function BookingInfoBlock (props){
    const userClassName='booking_cart_info_user'
    const arenda = props.arenda

 
    
    return(
        <>
        <section className='booking_cart_info'>
            <h1>{arenda.auto.mark} {arenda.auto.model}, {arenda.auto.year}</h1>
            <div className='booking_cart_info_cost'>
                <p>{arenda.cost} ₽</p>
                <p>стоимость аренды</p>
            </div>
            <div className='booking_cart_info_wrapper'>
                <p>Информация о поездке</p>
                <div className='booking_cart_info_wrapper_date'>
                    <p>Период аренды</p>
                    <p>{fixDate(arenda.startDay)} – {fixDate(arenda.endDay)}</p>
                </div>
                <div className='booking_cart_info_wrapper_plan'>
                    <p>Планы на поездку</p>
                    <p>{arenda.coment}</p>
                </div>
            </div>
            <UserBlock name={userClassName}/>
        </section>
        </>
    )
}

export default BookingInfoBlock