import React, { useContext} from "react"
import { FormContex } from './formContex'

const fetch = require("node-fetch");


function Continue (props){
  const {form, formValidation} = useContext(FormContex)
 
const request = () => {
    fetch('http://localhost:5000/api/registr', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {"Content-Type": "application/json;charset=UTF-8"}})    
    .then(res=>{
      if(!res.ok){
        props.value.message(true)
      }else{
        props.value.message(false)
      }
      return res.json()})
    .then(json => console.log(json)) 
    
  }

   return (
    <>
    <section className={(props.value.recovery||props.value.openAuthor)?'continue active':"continue"} >
    <input className="continue_button" onClick={request} type="submit" name="submit" value="Продолжить" disabled={formValidation}  />
    </section> 
    </>
  )
}
export default Continue