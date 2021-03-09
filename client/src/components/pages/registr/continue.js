import React, { useContext, useEffect, useState } from "react"
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
        props.value(true)
      }else{
        props.value(false)
      }
      return res.json()})
    .then(json => console.log(json)) 
    
  }

//
   return (
    <>
    <section className="continue">
    <input className="continue_button" onClick={request} type="submit" name="submit" value="Продолжить" disabled={formValidation}  />
    </section> 
    </>
  )
}
export default Continue