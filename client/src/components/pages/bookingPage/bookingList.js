import React from 'react'
import { filterArenda } from '../../../js/utils'
import Auto from '../../Auto/Auto'
import './BookingList.scss'


function BookingList (props) {
const history = props.value.userArendaHistory
const data = filterArenda(history)

  return(
    <>    
    <main className='booking_list'>
      <h1 className='booking_list_titel'>Бронирования</h1>
      {!(data.active.length==0)?<div className='booking_list_activeList'>
        <p>Актуальные</p>
        {data.active.map(e=>
        <Auto value={e.auto}
              hidden={true}
              cost={e.cost}
              date={ {startDay:e.startDay, endDay:e.endDay}
            }/>
            )}
      </div>:''}
      {!(data.arhive.length==0)?<div className='booking_list_arhiveList'>
        <p>В архиве</p>
        {data.arhive.map(e=>
        <Auto value={e.auto}
             hidden={true}
             cost={e.cost}
             date={ {startDay:e.startDay, endDay:e.endDay}
             }/>
             )}
      </div>:''}
      </main>
    </>    
  )
}

export default BookingList