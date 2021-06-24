import React, { useState } from 'react'
import Backarrow from '../../backarrow/backArrow'
import FotoBlock from '../detailAutoPage/fotoBlock'
import BookingInfoBlock from './bookingInfoBlock'
import './scss/BookingCart.scss'
import BookingDopOptions from './bookingDopOptions'
import Continuestep from '../../continueStep/continuestep'
import QustionsDelete from './qustionsDelete'
import Error from '../../error/error'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_ARENDA } from '../../../js/graphql-request'





function BookingCart () {
    const [hide, setHide]=useState(false)   
    const backlink = './booking'
    const backName = 'booking_cart_back'
    const continueTitel = 'Удалить бронирование'
    const nameClass = 'booking_cart_delete'
    const handleHide = () =>{
        setHide(!hide)
    }
    const alert = useSelector((state)=>{
        return state.app.alert
    })
    const id = useSelector((state)=>{
        return state.arenda.arendaIDUser
    })  
 
    const { loading, error, data:{findeArendaByID:arenda}={}  } =  useQuery (
        FETCH_ARENDA,
        { variables:{ findeArendaInput:{ id } } },             
          
      );
      


    return(
        <>
        {(!loading )?<main className={!hide?'booking_cart':'booking_cart active'}>
            {hide?<QustionsDelete close={handleHide} id={arenda.id}/>:''}
            {alert?<Error text={alert}/>:''}
            <Backarrow value={backlink} name={backName} />
            <FotoBlock/>
            <BookingInfoBlock arenda={arenda} />
            <BookingDopOptions arenda={arenda} />
            <Continuestep  validation={false} titel={continueTitel} nameClass={nameClass} nextStep={handleHide}/>     
        </main>:''}
        

        </>
    )
}


export  default BookingCart