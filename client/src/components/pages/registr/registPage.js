import React, {useContext, useState} from 'react'
import Registabout from './RegistAbout'
import Continue from './continue'
import Authorpage from '../autn/authorPgae'
import Recovery from "../autn/recoveryPage";
import { FormContex } from '../../contextApp'
import {FormProvider} from './formContex'



function Registpage (){
  const [message, setMessage]=useState(false)
  const {openAuthor, setOpenAuthor, recovery, setRevocery} = useContext(FormContex)
  
  return(
    <FormProvider>
    <main className={(recovery||openAuthor)?'registr_main activeMain':'registr_main'}>
    {message?<div className="registr_main_servermessage"><p>Не удалось продолжить регистрацию. Попробуйте ещё раз</p></div>:''}
    {openAuthor?<Authorpage value={{recov:setRevocery,closeAuthor:setOpenAuthor}}/>:""}
    {recovery?<Recovery value={{recov:setRevocery,backStep:setOpenAuthor}}/>:""} 
     <Registabout />
     <Continue value={{message:setMessage, recovery:recovery, openAuthor:openAuthor}}/>       
    </main>
     </FormProvider>
   
  )
}

export default Registpage