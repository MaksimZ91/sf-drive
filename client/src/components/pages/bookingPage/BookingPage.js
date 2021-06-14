import React, { useContext, useState } from 'react'
import './booking.scss'
import NotBookingPage from './notBokingpage'
import {  useQuery } from '@apollo/react-hooks'
import { FETCH_USER_ARENDA_HISTORY } from '../../../js/graphql-request'
import { FormContex } from '../../contextApp'
import BookingList from './bookingList'
import { useDispatch, useSelector } from 'react-redux'
import { userArendaHistory } from '../../../../redux/actions/actions'






 function  BookingPage ()  {
   const { userId } = useContext(FormContex) 

  const { loading, error, data } =  useQuery (
    FETCH_USER_ARENDA_HISTORY,
    { variables:{ userArendaInput:{ userId } } },
  );




 


return(
<>
<main className="booking">
  {data?<BookingList value={data}/>:<NotBookingPage/>}
</main>
</>
)}

export default BookingPage