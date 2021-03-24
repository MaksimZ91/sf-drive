import React, { useContext} from "react"
import { FormContex } from './formContex'
import {useHttp} from '../../../hooks/http.hook'
import {useAuth} from '../../../hooks/autn.hook'

function Continue (props){
  const {form, formValidation} = useContext(FormContex)
  const {login}=useAuth()
  const {request} = useHttp()


  const authorRequest = async () => {
    try {
        const data = await request('http://localhost:5000/registr','POST',{...form})
        console.log(data) 
        props.value.message(false)        
    } catch (e) {
      console.log(e)
      props.value.message(true)                 
    }    
}
   return (
    <>
    <section className={(props.value.recovery||props.value.openAuthor)?'continue active':"continue"} >
    <input className="continue_button" onClick={authorRequest} type="submit" name="submit" value="Продолжить" disabled={formValidation}  />
    </section> 
    </>
  )
}
export default Continue