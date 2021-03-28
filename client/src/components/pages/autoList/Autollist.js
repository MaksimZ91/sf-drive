import React from 'react'
import Auto from '../autoList/Auto'

function Autolist (){
    return(
        <>
        <section className='myAuto'>
        <h1 className='myAuto_titel'>Мои автомобили</h1>
        
        <Auto/>  
        <Auto/>  
                
        </section>
        <section className='add_auto' >
            <button className='add_auto_button'>Добавить автомобиль</button> 
        </section>
        </>
    )
}

export default Autolist