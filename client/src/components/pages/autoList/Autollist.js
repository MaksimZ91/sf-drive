import React from 'react'
import Auto from '../autoList/Auto'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchAuto }from '../../../../redux/actions/actions'


function Autolist (){  
   const dispatch = useDispatch()
   const auto = useSelector((state)=>{
    return state.auto.userAuto
})
   
    return(
        <>
        <section className='myAuto'>
        <h1 className='myAuto_titel' onClick={()=>dispatch(fetchAutoList())}>Мои автомобили</h1>
        {auto.map(el => <NavLink to="/auto"  onClick={()=>dispatch(fetchAuto(el.id))}  key={el.id} ><Auto value={el}/></NavLink>)}                
        </section>
        <section className='add_auto' >
        <NavLink to="/addauto"><button className='add_auto_button'>Добавить автомобиль</button></NavLink>
        </section>
        </>
    )
}

export default Autolist