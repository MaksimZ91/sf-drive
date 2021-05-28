import React, { useState } from 'react'
import Calendarb from '../../calendarb/calendarb'
import { useSelector } from 'react-redux'


function Arendainfo (){
    const [hidden, setHidden] = useState(true)
    const date = useSelector((state)=>{
        return state.calen
      })
    const calendName = 'filter_wrapper_date_currnetmonth'  
    const curentDate = new Date()

    return(
        <>
          <section className='arena_info'>
                <p>Информация о поездке</p>
                <p>Период аренды</p>
                <div className='arena_info_wrapper'>
                    <input  onClick={()=>setHidden(!hidden)} type='text'  name='date' ></input>                   
                    {!hidden?<Calendarb value={{calendName, date:curentDate}}/>:''}
                </div>
                <div className='arena_info_texarea'>
                    <p>Планы на поездку</p>
                    <input type='textarea'></input>
                    <label>Опишите свои планы на поездку для вледельца автомобиля</label>
                </div>
            </section>
        </>
    )
}

export default Arendainfo