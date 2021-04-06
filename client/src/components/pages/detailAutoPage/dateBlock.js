import React, { useState } from 'react';
import  Calendarb  from  './calendarb'



function DateBlock (){
  const calendName = 'dateblock_wrapper_currnetmonth'

    return(
        <>
        <section className='dateblock'>
            <p>Доступность</p>
            <div className='dateblock_wrapper'>
                <div className='dateblock_wrapper_currnetmonth'>
                <Calendarb value={calendName}/>
               
               
                    
                </div>
                <div className='dateblock_wrapper_secondmonth'>
               
             
                  
                </div>
             </div>
             </section>
        </>
    )
}


export default DateBlock