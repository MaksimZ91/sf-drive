import React, {useState} from 'react'
import Dopoptions from './dopOptions'
import Options from './options'
import Continuestep from './continuestep'
import {useHttp} from '../../../hooks/http.hook'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../../../redux/actions/actions'



function Optionsautopage (){
  const dispatch = useDispatch()
  const [error, setError]=useState(null)
  const [data, setData]=useState(null)
  const {request} = useHttp()
  const form = useSelector((state)=>{
    return {data:state.newAuto.addAutoOptions, id:state.newAuto.newAutoId}
  })

  console.log(form)


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
  
  
  const nextPage = '/addauto/photo'
  return(
    <>
    <main>
    <section className="options_auto">
    <div className="options_auto_titel">
   <p>Шаг 2 из 4</p>
   <p>Дополнительно</p>
    </div>
    <Options/>
    <Dopoptions/>
    <Continuestep  nextStep={authorRequest}/> 
    {!error&&data?<Redirect to='/addauto/photo'/>:''}  
    </section>  
    </main>
    </>
  )
}

export default Optionsautopage