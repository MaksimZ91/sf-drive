import React, { useContext, useState } from "react"
import { RegistContext } from './formContex'
import {useHttp} from '../../../hooks/http.hook'
import { FormContex } from '../../contextApp'
import { Redirect } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addNewUserID } from "../../../../redux/actions/userAction"

function Continue (props){
  const dispatch = useDispatch()
  const [ data, setData ] = useState(null)
  const {form, formValidation} = useContext(RegistContext)
  const {login, accessToken } = useContext(FormContex)
  const {request} = useHttp()


  const authorRequest = async () => {
    try {
        const result = await request('http://localhost:5000/registr','POST',{...form})
        dispatch(addNewUserID(result.userId))              
        props.value.message(false)  
        setData(result)        
    } catch (e) {
      console.log(e)
      props.value.message(true)                 
    }    
}
if(data){
  return(
    <>
   <Redirect to='/secondstep'/>
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