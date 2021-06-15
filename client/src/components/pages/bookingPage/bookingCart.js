import React from 'react'
import Backarrow from '../../backarrow/backArrow'
import FotoBlock from '../detailAutoPage/fotoBlock'
import BookingInfoBlock from './bookingInfoBlock'
import './BookingCart.scss'
import BookingDopOptions from './bookingDopOptions'
import Continuestep from '../../continueStep/continuestep'


function BookingCart () {
    const backlink = './booking'
    const backName = 'back_wrapper'
    const continueTitel = 'Удалить бронирование'
    const nameClass = 'booking_cart_delete'
    return(
        <>
        <main className='booking_cart'>
            <Backarrow value={backlink} name={backName}/>
            <FotoBlock/>
            <BookingInfoBlock/>
            <BookingDopOptions/>    
        </main>
        <Continuestep  validation={true} titel={continueTitel} nameClass={nameClass}/> 

        </>
    )
}
//nextStep={authorRequest}

export  default BookingCart