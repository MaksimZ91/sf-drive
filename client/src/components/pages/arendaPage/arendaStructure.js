import React from 'react'
import { useSelector } from 'react-redux'
import Auto from '../autoList/Auto'


function Arendastructure (){
    const auto =useSelector((state)=>{
        return state.auto.currentAuto
    })
    
    return(
        <>
         <section className='arenda_structure'>
                <p>Состав заказа</p>
               <Auto hidden={true} value={auto}/>
            </section>
        </>
    )
}

export default Arendastructure