import React from 'react'
import Formfio from "./formFio"
import Passport from './formPassport'
import License from './formLicense'
import Password from './formPassword'



function Registabout (props){
  
  return(
    <>
    <section className="registr_about">
    <div className="registr_about_titel">
   <p>Шаг 1 из 3</p>
   <p>Расскажите о себе</p>
    </div>
    <Formfio/>
    <Passport/>
    <License/> 
    <Password/> 
    </section>    
    </> 
  )
}

export default Registabout