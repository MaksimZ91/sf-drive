import React from 'react'
import { useSelector } from 'react-redux'
import Auto from './Auto'


function FilterAuto (){
    const auto =useSelector((state)=>{
        return state.auto.allAuto
    })
    return(
        <>
        <section className='options'>
            <div className='options_wrapper'>
                <div className='options_wrapper_price'><p>Любая цена</p></div>
                <div clasName ='options_wrapper_kpp'><p>Любые КПП</p></div>
                <div clasName ='options_wrapper_privod'><p>Любой привод</p></div>
                <div clasName ='options_wrapper_motor'><p>Любые двигатели</p></div>
                <div>
                    <img src='../src/img/map.svg'/>
                    <p>Показать карту</p>                    
                </div>
            </div>
        {auto.map(el => <Auto key={el.id} value={el}/>)}
        </section>
        </>
    )
}

export default FilterAuto