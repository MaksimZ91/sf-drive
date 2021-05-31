import React, { useState, useEffect } from 'react'
import Calendarb from '../../calendarb/calendarb'
import { useSelector } from 'react-redux'
import { fixDate } from '../../../js/fixday.js'


function Arendainfo (){
    const [hidden, setHidden] = useState(true)
    const [selectDate, setSelectDate] = useState({calen:''})
    const date = useSelector((state)=>{
        return state.calen
      })
    const calendName = 'arenda_info_wrapper_currnetmonth'  
    const curentDate = new Date()

    useEffect(()=>{
        if(date.startDate||date.endDate)setSelectDate({calen:`${fixDate(date.startDate)}-${fixDate(date.endDate)}`})
        },[date])


  

    return(
        <>
          <section className='arenda_info'>
                <p>Информация о поездке</p>              
                <div className='arenda_info_wrapper'>
                    <p>Период аренды</p>
                    <input  onClick={()=>setHidden(!hidden)} type='text'  name='date' defaultValue={selectDate.calen} ></input>                   
                    {!hidden?<Calendarb value={{calendName, date:curentDate}}/>:''}
                </div>
                <div className='arenda_info_texarea'>
                    <p>Планы на поездку</p>
                    <textarea  type='textarea' placeholder='Опишите свои планы на поездку для вледельца автомобиля'></textarea>                  
                </div>
            </section>
        </>
    )
}

export default Arendainfo