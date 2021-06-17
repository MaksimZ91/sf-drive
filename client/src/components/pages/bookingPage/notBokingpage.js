import React from 'react'
import Sucses from '../../sucses/sucses'
import { useSelector } from 'react-redux'



function NotBookingPage () {
  const alert = useSelector((state)=>{
    return state.app.alert
  })
  
return(
<>
{alert?<Sucses text={alert}/>:''} 
<main className="booking">
  <div className="booking_wrapper">
    <img className="booking_wrapper_img" src="./src/img/road.svg"  alt="road"/>
    <p className="booking_wrapper_text">Здесь будут ваши бронирования</p>
  </div>
</main>
</>
)}

export default NotBookingPage