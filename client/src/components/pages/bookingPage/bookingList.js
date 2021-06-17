import React from 'react'
import { filterArenda } from '../../../js/utils'
import { NavLink } from 'react-router-dom'
import Auto from '../../Auto/Auto'
import Sucses from '../../sucses/sucses'
import './scss/BookingList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArendaIDUser } from '../../../../redux/actions/actions'


function BookingList (props) {
const history = props.value.userArendaHistory
const data = filterArenda(history)
const dispatch = useDispatch()
const alert = useSelector((state)=>{
  return state.app.alert
})


  return(
    <>
    {alert?<Sucses text={alert}/>:''}   
    <main className='booking_list'> 
      <h1 className='booking_list_titel'>Бронирования</h1>
      {!(data.active.length==0)?<div className='booking_list_activeList'>
        <p>Актуальные</p>
        {data.active.map(e=>
          <NavLink to="/cart" key={e.id} onClick={()=>dispatch(fetchArendaIDUser(e.id))} >        
            <Auto value={e.auto}
                hidden={true}
                cost={e.cost}
                date={ {startDay:e.startDay, endDay:e.endDay} }                
               />
          </NavLink>           
            )}
      </div>:''}
      {!(data.arhive.length==0)?<div className='booking_list_arhiveList'>
        <p>В архиве</p>
        {data.arhive.map(e=>
         <NavLink to="/cart" key={e.id} onClick={()=>dispatch(fetchArendaIDUser(e.id))} >   
            <Auto value={e.auto}
                hidden={true}
                cost={e.cost}
                date={ {startDay:e.startDay, endDay:e.endDay} }
                />
          </NavLink>          
             )}
      </div>:''}    
      </main>      
    </>    
  )
}

export default BookingList