import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useHttp } from '../../../hooks/http.hook'


function ArendaBlock (props){
    const [error, setError]=useState(null)
    const [data, setData]=useState(null)
    const {request} = useHttp()
    const autoDate = useSelector ((state)=>{
        return state.calen
    })
     const body = {
         startDay : autoDate.startDate,

         endDay : autoDate.endDate,

         newAuto : props.auto
     }

   
    
    return(
        <>
        <section className="arendablok">
            <NavLink to="/auto/arenda"><button className='arendablock_button'>Арендовать</button></NavLink>
        </section>
        </>
    )
}


export default ArendaBlock