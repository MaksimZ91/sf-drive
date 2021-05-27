import React from 'react'
import Auto from './Autos'
import { useSelector } from 'react-redux'



function List (){
    const auto =useSelector((state)=>{
        return state.auto.allAuto
    })
    

    return(
    <>
    <section className='list'>
        <p className='list_titel'>Рекомендуем поблизости</p>
        <div className='list_wrapper'>
            {auto.map(el => <Auto key={el.id} value={el} hidden={false}/>)}          
        </div>
    </section>
    </>
    )
}

export default List