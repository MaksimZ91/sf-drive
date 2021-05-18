import React, { useState } from 'react'
import { useSelector } from 'react-redux'
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
     console.log(body)

   

    const authorRequest = async () => { 
        try {      
            const result = await request('http://localhost:5000/auto/arenda','POST', body)  
            setData(result)
        } catch (e) {
          setError(e)
        }     
    } 

    console.log(data)

    
    return(
        <>
        <section className="arendablok">
            <button className='arendablock_button' onClick={authorRequest}>Арендовать</button>
        </section>
        </>
    )
}


export default ArendaBlock