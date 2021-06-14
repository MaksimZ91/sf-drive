import React, { useEffect } from 'react'
import { filterArenda } from '../../../js/utils'
import Auto from '../../Auto/Auto'


function BookingList (props) {
const history = props.value.userArendaHistory
const data = filterArenda(history)
console.log(data.active)


console.log(data.active[0].startDay)


  return(
    <>
    <h1>Бронирования</h1>    
    <div>
      <p>Актуальные</p> 
      {data.active.map(e=>
      <Auto value={e.auto} hidden={true} cost={e.cost} date={ {startDay:e.startDay, endDay:e.endDay} }/>
      )}     
    </div>
    <div>
      <p>В архиве</p>
      {data.arhive.map(e=>
       <Auto value={e.auto} hidden={true} cost={e.cost} date={false} date={ {startDay:e.startDay, endDay:e.endDay} }/>
      )}
    </div>
    </>    
  )
}

export default BookingList