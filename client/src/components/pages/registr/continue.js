import React, { useContext } from "react"
import { RegistContext } from './formContex'
import {useHttp} from '../../../hooks/http.hook'
import { FormContex } from '../../contextApp'
import { Redirect } from "react-router-dom"

function Continue (props){
   const {form, formValidation} = useContext(RegistContext)
  const {login, accessToken } = useContext(FormContex)
  const {request} = useHttp()


  const authorRequest = async () => {
    try {
        const data = await request('http://localhost:5000/registr','POST',{...form})   
        await login(data.accessToken,data.refreshToken, data.userId)         
        props.value.message(false)  
        
    } catch (e) {
      console.log(e)
      props.value.message(true)                 
    }    
}
if(accessToken){
  return(
    <>
   <Redirect to='/'/>
    </>
  )
}else{
  return (
    <>
    <section className={(props.value.recovery||props.value.openAuthor)?'continue active':"continue"} >
    <input className="continue_button" onClick={authorRequest} type="submit" name="submit" value="Продолжить" disabled={formValidation}  />
    </section> 
    
    </>
  )
}
}
export default Continue