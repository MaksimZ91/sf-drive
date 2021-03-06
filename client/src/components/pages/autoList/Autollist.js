import React from 'react'
import Auto from '../../../components/Auto/Auto'
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
                <h1 className='myAuto_titel'>Мои автомобили</h1>
                {auto.map(el =>
                <NavLink
                to="/auto"
                onClick={ () => dispatch(fetchAuto(el.id)) }
                key={el.id}>
                    <Auto
                    value={el}
                    cost={false}
                    date={false}
                    />
                </NavLink>)
                }                
                </section>
                <section className='add_auto' >
                <NavLink
                to="/addauto">
                    <button className='add_auto_button'>Добавить автомобиль</button>
                </NavLink>
            </section>
        </>
    )
}

export default Autolist