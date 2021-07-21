import React, { useState, useEffect }  from 'react'
import {validation} from '../../../js/validationForm'


export const  RegistContext = React.createContext()


export const FormRefisrtProvider = ({ children }) => {
  const [form, setForm]=useState({ fio:'', email:'', password:'', phone:'', date:'', number:'', passDate:'', about:'', cod:'',numberLicense:'', dateLicense:'' })
  const [formValidation, setFormValidation]=useState(true)

    const onChangeInput = event => {
      setForm({ ...form, [event.target.name]: event.target.value })   
  }   

  useEffect(()=>{setFormValidation((validation(form)))},[form])


 const fixDate =(date) => {
    let day =date.getDate()
    let month = date.getMonth()+1
    if (day<10){ 
      day="0"+ day
    }
    if (month<10){
      month = "0"+ month
    }
    const  newDate = day+"."+month+"."+date.getFullYear()
    return setForm({ ...form,  [event.target.name]: newDate})
  }
  


return (
  <RegistContext.Provider value={{form, onChangeInput,fixDate ,formValidation, setForm }}>
    {children}
  </RegistContext.Provider>
  )
}
