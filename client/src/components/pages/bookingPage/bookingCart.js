import React, { useState } from 'react'
import Backarrow from '../../backarrow/backArrow'
import FotoBlock from '../detailAutoPage/fotoBlock'
import BookingInfoBlock from './bookingInfoBlock'
import './BookingCart.scss'
import BookingDopOptions from './bookingDopOptions'
import Continuestep from '../../continueStep/continuestep'
import QustionsDelete from './qustionsDelete'
import { useSelector } from 'react-redux'




function BookingCart () {
    const [hide, setHide]=useState(false)
    const backlink = './booking'
    const backName = 'booking_cart_back'
    const continueTitel = 'Удалить бронирование'
    const nameClass = 'booking_cart_delete'
    const handleHide = () =>{
        setHide(!hide)
    }
    const arenda = useSelector((state)=>{
        return state.arenda.arendaUser
    }) 
   


    return(
        <>
        {!(Object.keys(arenda).length==0)?<main className={!hide?'booking_cart':'booking_cart active'}>
            {hide?<QustionsDelete close={handleHide}/>:''}
            <Backarrow value={backlink} name={backName}/>
            <FotoBlock/>
            <BookingInfoBlock />
            <BookingDopOptions />
            <Continuestep  validation={false} titel={continueTitel} nameClass={nameClass} nextStep={handleHide}/>     
        </main>:''}
        

        </>
    )
}
//nextStep={authorRequest}

export  default BookingCart