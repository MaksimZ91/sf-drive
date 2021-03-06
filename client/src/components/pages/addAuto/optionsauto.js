import React, {useEffect, useState} from 'react'
import Dopoptions from './dopOptions'
import Options from './options'
import Continuestep from '../../continueStep/continuestep'
import Error from '../../error/error'
import {useHttp} from '../../../hooks/http.hook'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../../../redux/actions/actions'
import Backarrow from '../../backarrow/backArrow'



function Optionsautopage (){
  const dispatch = useDispatch()
  const [error, setError]=useState(null)
  const [valid, setValid]=useState(true)
  const [data, setData]=useState(null)
  const {request} = useHttp()
  const form = useSelector((state)=>{
    return {data:state.newAuto.addAutoOptions, id:state.newAuto.newAutoId, dopOptions:state.newAuto.dopOptions}
  })
  const backlink = "/addauto"
  const backName ='options_auto_back'  
  const continueTitel ='Продолжить'
  const nameClass = "new_auto_continue"

  const authorRequest = async () => {   
    try { 
      dispatch(showLoading())
        const result = await request('http://localhost:5000/auto/options','POST',{...form.data, ...form.id, ...form.dopOptions})
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
    <Backarrow value={backlink} name={backName}/>
    <div className="options_auto_titel">  
    <p>Шаг 2 из 4</p>  
   <p>Дополнительно</p>
    </div>
    <Options/>
    <Dopoptions/>
    <Continuestep  nextStep={authorRequest} validation={valid} titel={continueTitel} nameClass={nameClass}/> 
    {!error&&data?<Redirect to='/addauto/photo' />:''}  
    </section>  
    </main>
    </>
  )
}

export default Optionsautopage