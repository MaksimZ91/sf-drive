import React, { useContext } from 'react'
import './scss/Booking.scss'
import NotBookingPage from './notBokingpage'
import {  useQuery } from '@apollo/react-hooks'
import { FETCH_USER_ARENDA_HISTORY } from '../../../js/graphql-request'
import { FormContex } from '../../contextApp'
import BookingList from './bookingList'


 function  BookingPage ()  {
   const { userId } = useContext(FormContex) 

  const { loading, error, data } =  useQuery (
    FETCH_USER_ARENDA_HISTORY,
<<<<<<< HEAD
    { variables:{ userArendaInput:{ userId } }, fetchPolicy: "cache-and-network"}
=======
    { variables:{ userArendaInput:{ userId } }, pollInterval: 1000, fetchPolicy: "cache-and-network"},
>>>>>>> 098965e1b14756041fdf18c58854387f2fd09f00
  );
  
if (loading){
  return (<>""</>)
}else{
  return(
    <>
      {!(data.userArendaHistory.length==0)?<BookingList value={data}/>:<NotBookingPage/>}
    </>
    )
}}

export default BookingPage