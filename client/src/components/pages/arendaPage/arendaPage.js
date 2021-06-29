import React, { useState } from 'react'
import Backarrow from '../../backarrow/backArrow'
import Arendastructure from './arendaStructure'
import Arendainfo from './arendaInfo'
import Arendaoptions from './arendaOptions'
import ArendaCheck from './arendaCheck'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector } from 'react-redux'
import Continuestep from '../../continueStep/continuestep'
const TOKENS_KYES='tokens'



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
    const option = useSelector((state)=>{
        return state.newAuto.dopOptions
    }) 
    const arenda = useSelector((state)=>{
        return state.arenda.arendaParam
    })
    const continueTitel ='Перейти к оплате'
    const nameClass = 'arenda_continue'
   
    const authorRequest = async () => { 
        try { 
            const user = await JSON.parse(localStorage.getItem(TOKENS_KYES))  
            const body = {
                startDay : autoDate.startDate,
                endDay : autoDate.endDate,
                newAuto: auto.id,
                cost : arenda.cost,
                coment : arenda.coment,
                user : user.userId
            }     
            const result = await request('http://localhost:5000/arenda/created','POST', {...body , ...option})  
            setData(result)
        } catch (e) {
          setError(e)
        }     
    } 

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