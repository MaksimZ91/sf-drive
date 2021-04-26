import React, { useEffect, useState } from 'react'
import Aboutautoinfo from './aboutAutoInfo'
import Priceauto from './priceAuto'
import Insurance from './insurance'
import Continuestep from './continuestep'
import { useHttp } from '../../../hooks/http.hook'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addNewAutoID, hideLoading, showLoading } from '../../../../redux/actions/actions'
import { validation } from '../../../js/validationForm'
import Error from './error'

const TOKENS_KYES='tokens'



function Addautopage(){
  const dispatch = useDispatch()
  const [valid, setValid]=useState(true)
  const [error, setError]=useState(null)
  const [data, setData]=useState(null)
  const {request} = useHttp()
  const form = useSelector((state)=>{
    return state.newAuto.addAuto
  })





  const authorRequest = async () => {   
    try { 
      dispatch(showLoading())       
        const auto = await JSON.parse(localStorage.getItem(TOKENS_KYES))       
        const result = await request('http://localhost:5000/auto/add','POST',{...form, userId:auto.userId })
        dispatch(addNewAutoID(result))
        setData(result) 
        dispatch(hideLoading())     
    } catch (e) {
      setError(e)
    }     
} 

useEffect(()=>{
  setValid(validation(form))
},[form])



  return(
    <>
    <main>
    {error?<Error/>:''}
    <section className="new_auto">
    <div className="new_auto_titel">
   <p>Шаг 1 из 4</p>
   <p>Новый автомобиль</p>
    </div>
    <Aboutautoinfo/>
    <Priceauto/>
    <Insurance/> 
    <Continuestep  nextStep={authorRequest} validation={valid}/> 
    {!error&&data?<Redirect to='/addauto/options'/>:''}
    </section>  
    </main>
    </>
  )
}


export default Addautopage