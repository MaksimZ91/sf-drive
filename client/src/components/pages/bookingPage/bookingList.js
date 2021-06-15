import React, {useState} from 'react'
import { filterArenda } from '../../../js/utils'
import { NavLink } from 'react-router-dom'
import Auto from '../../Auto/Auto'
import './BookingList.scss'
import { useLazyQuery } from '@apollo/client'
import { FETCH_ARENDA } from '../../../js/graphql-request'
import { useDispatch } from 'react-redux'
import { fetchArendaUser } from '../../../../redux/actions/actions'


function BookingList (props) {
const history = props.value.userArendaHistory
const [asd, setAsd]=useState(false)
const data = filterArenda(history)
const dispatch = useDispatch()
const [isLoadingMore, setIsLoadingMore] = useState(false);



const [getArenda, { data:{findeArendaByID:arenda}={} }] = useLazyQuery(FETCH_ARENDA)  



  return(
    <>    
    <main className='booking_list'> 
      <h1 className='booking_list_titel'>Бронирования</h1>
      {!(data.active.length==0)?<div className='booking_list_activeList'>
        <p>Актуальные</p>
        {data.active.map(e=>
          <NavLink to="/cart" key={e.id} onClick={()=>dispatch(fetchArendaUser(e.id))} >        
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
         <NavLink to="/cart" key={e.id} onClick={()=>dispatch(fetchArendaUser(e.id))} >   
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