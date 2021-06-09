import React, { useState } from 'react'
import Backarrow from '../../backarrow/backArrow'
import Arendastructure from './arendaStructure'
import Arendainfo from './arendaInfo'
import Arendaoptions from './arendaOptions'
import ArendaCheck from './arendaCheck'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector } from 'react-redux'
import Continuestep from '../../continueStep/continuestep'



function ArendaPage(){
    const backlink = '/auto'
    const back = 'arenda_back'
    const [error, setError]=useState(null)
    const [data, setData]=useState(null)
    const {request} = useHttp()
    const autoDate = useSelector ((state)=>{
        return state.calen
    })
    const auto = useSelector((state)=>{
        return state.auto.currentAuto
    })
    const continueTitel ='Перейти к оплате'
    const nameClass = 'arenda_continue'
    const body = {
         startDay : autoDate.startDate,
         endDay : autoDate.endDate,
         newAuto: auto.id,
         cost:null,
         coment:null
     }




    const authorRequest = async () => { 
        try {      
            const result = await request('http://localhost:5000/auto/arenda','POST', body)  
            setData(result)
        } catch (e) {
          setError(e)
        }     
    } 
//   <Arendaoptions/>
    return(
        <>
        {!(Object.keys(auto).length==0)?
        <main className='arenda'>
            <Backarrow value={backlink} name={back}/>          
            <h1>Оформление аренды</h1>
            <Arendastructure/>
            <Arendainfo/>
            <Arendaoptions/>           
            <ArendaCheck startDate = { autoDate.startDate }
                         endDate = { autoDate.endDate }
                         price = { auto.price }
                         priceThreeDays = { auto.priceThreeDays }
                         priceFiveDays = { auto.priceFiveDays }/>
        </main>:''}    
        <Continuestep titel={continueTitel} validation={false} nextStep={authorRequest} nameClass={nameClass}/>
        </>
    )
}

export default ArendaPage