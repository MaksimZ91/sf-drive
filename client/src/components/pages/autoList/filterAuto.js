import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Auto from './Auto'
import { NavLink } from 'react-router-dom'
import { fetchAuto }from '../../../../redux/actions/actions'



function FilterAuto (){
    const dispatch = useDispatch()
    const auto = useSelector((state)=>{
        return state.auto.autoFilter
      })
    return(
        <>
        <section className='options'>
            <div className='options_wrapper'>
                <div className='options_wrapper_price'><p>Любая цена</p></div>
                <div className ='options_wrapper_kpp'><p>Любые КПП</p></div>
                <div className ='options_wrapper_privod'><p>Любой привод</p></div>
                <div className ='options_wrapper_motor'><p>Любые двигатели</p></div>
                <div className ='options_wrapper_map'>
                    <img src='../src/img/map.svg'/>
                    <p>Показать карту</p>                    
                </div>
            </div>
        {auto.map(el =>
        <div className ='options_autolist' key={el.mark} >
           <NavLink to="/auto" onClick={()=>dispatch(fetchAuto(el.id))}  ><Auto value={el} hidden={false}/></NavLink>
           <NavLink to="/auto" ><button className ='options_autolist_wrapper'>Арендовать</button></NavLink>
        </div>)}
        </section>
        </>
    )
}

export default FilterAuto