import React, { useState } from 'react';
import  Calendarb from './calendarb'



function DateBlock (){
  const calendName = 'dateblock_wrapper_currnetmonth'
  const curentDate = new Date()
  const currentMonth = curentDate.getMonth()
  const year = curentDate.getFullYear()
  const nextDate= new Date (year, currentMonth + 1)




    return(
        <>
        <section className='dateblock'>
            <p>Доступность</p>
            <div className='dateblock_wrapper'>
                <Calendarb value={{calendName, date:curentDate}}/>
                <Calendarb value={{calendName, date:nextDate}}/>
            </div>
            </section>
        </>
    )
}


export default DateBlock