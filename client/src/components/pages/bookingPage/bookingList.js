import React from 'react'


function BookingList (props) {
const history = props.value.userArendaHistory



const filterArenda = (arendaList) =>{
  let activeArenda=[]
  let arhiveArenda = []
  const currentDay = new Date ()
  arendaList.forEach(element => {
   (new Date(element.endDay) < currentDay)?arhiveArenda.push(element):activeArenda.push(element)
  })
  return {activeArenda , arhiveArenda }
}






  return(
    <>
    <h1>Бронирования</h1>
    <div>
      <p>Актуальные</p>      
    </div>
    <div>
      <p>В архиве</p>
    </div>
    </>    
  )
}

export default BookingList