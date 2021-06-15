import React from 'react'
import UserBlock from '../../user/user'


function BookingInfoBlock (){
    const userClassName='booking_cart_info_user'
    return(
        <>
        <section className='booking_cart_info'>
            <h1>Hyundai Solaris, 2018</h1>
            <div className='booking_cart_info_cost'>
                <p>6 800 ₽</p>
                <p>стоимость аренды</p>
            </div>
            <div className='booking_cart_info_wrapper'>
                <p>Информация о поездке</p>
                <div className='booking_cart_info_wrapper_date'>
                    <p>Период аренды</p>
                    <p>05.06.20 – 08.06.20</p>
                </div>
                <div className='booking_cart_info_wrapper_plan'>
                    <p>Планы на поездку</p>
                    <p>Планируем посетить известные достопримечательности 
                       в окресностях города, такие как Петергоф, крепость 
                       Орешек и город Кронштадт</p>
                </div>
            </div>
            <UserBlock name={userClassName}/>
        </section>
        </>
    )
}

export default BookingInfoBlock