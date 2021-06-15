import React, { useContext } from 'react'
import './booking.scss'
import NotBookingPage from './notBokingpage'
import {  useQuery } from '@apollo/react-hooks'
import { FETCH_USER_ARENDA_HISTORY } from '../../../js/graphql-request'
import { FormContex } from '../../contextApp'
import BookingList from './bookingList'


 function  BookingPage ()  {
   const { userId } = useContext(FormContex) 

  const { loading, error, data } =  useQuery (
    FETCH_USER_ARENDA_HISTORY,
    { variables:{ userArendaInput:{ userId } } },
  );

return(
<>

  {data?<BookingList value={data}/>:<NotBookingPage/>}

</>
)}

export default BookingPage