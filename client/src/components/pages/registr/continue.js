import React, { useContext} from "react"
import { RegistContext } from './formContex'
import {useHttp} from '../../../hooks/http.hook'
import {useAuth} from '../../../hooks/autn.hook'

function Continue (props){
  const {form, formValidation} = useContext(RegistContext)
  const {login}=useAuth()
  const {request} = useHttp()
 console.log(form)

  const authorRequest = async () => {
    try {
        const data = await request('http://localhost:5000/registr','POST',{...form})     
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