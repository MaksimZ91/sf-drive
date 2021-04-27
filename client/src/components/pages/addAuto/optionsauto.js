import React, {useEffect, useState} from 'react'
import Dopoptions from './dopOptions'
import Options from './options'
import Continuestep from './continuestep'
import Error from './error'
import {useHttp} from '../../../hooks/http.hook'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../../../redux/actions/actions'



function Optionsautopage (){
  const dispatch = useDispatch()
  const [error, setError]=useState(null)
  const [valid, setValid]=useState(true)
  const [data, setData]=useState(null)
  const {request} = useHttp()
  const form = useSelector((state)=>{
    return {data:state.newAuto.addAutoOptions, id:state.newAuto.newAutoId}
  })

  const authorRequest = async () => {   
    try { 
      dispatch(showLoading())
        const result = await request('http://localhost:5000/auto/options','POST',{...form.data, ...form.id})
        setData(result) 
        dispatch(hideLoading())     
    } catch (e) {
      setError(e)
    }     
} 
const validation = (form) =>{
  for (let key in form){  
    if (form[key]==true)return false
  }
  return true
}


useEffect(()=>{
  setValid(validation(form.data))
},[form.data])
  
  

  return(
    <>
    <main>   
    {error?<Error/>:''}
    <section className="options_auto">
    <div className="options_auto_titel">
   <p>Шаг 2 из 4</p>
   <p>Дополнительно</p>
    </div>
    <Options/>
    <Dopoptions/>
    <Continuestep  nextStep={authorRequest} validation={valid}/> 
    {!error&&data?<Redirect to='/addauto/photo' />:''}  
    </section>  
    </main>
    </>
  )
}

export default Optionsautopage