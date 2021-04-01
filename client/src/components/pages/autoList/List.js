import React from 'react'
import Auto from './Autos'



function List (){

    return(
    <>
    <section className='list'>
        <p className='list_titel'>Рекомендуем поблизости</p>
        <div className='list_wrapper'>
            <Auto/>
            <Auto/>
            <Auto/>
            <Auto/>            
        </div>
    </section>
    </>
    )
}

export default List