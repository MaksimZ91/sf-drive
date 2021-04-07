import React, { useState } from 'react';
import  Calendarb from './calendarb'



function DateBlock (){
  const calendName = 'dateblock_wrapper_currnetmonth'
  const curentDate = new Date()
  const currentMonth = curentDate.getMonth()
  const year = curentDate.getFullYear()
  const date= new Date (year, currentMonth + 1)
  const month = date.getMonth()



    return(
        <>
        <section className='dateblock'>
            <p>Доступность</p>
            <div className='dateblock_wrapper'>
                <div className='dateblock_wrapper_currnetmonth'>
                <Calendarb value={{calendName, month:currentMonth}}/>
               
               
                    
                </div>
                <div className='dateblock_wrapper_secondmonth'>
                <Calendarb value={{calendName, month:month}}/>
               
             
                  
                </div>
             </div>
             </section>
        </>
    )
}


export default DateBlock