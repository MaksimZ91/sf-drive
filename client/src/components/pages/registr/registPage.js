import React, { useState} from 'react'
import Registabout from './RegistAbout'
import Continue from './continue'
import {FormProvider} from './formContex'




function Registpage (){
  const [message, setMessage]=useState(false)
 
 

 

 
  
  return(
    <FormProvider>
    <main className="registr_main">
    {message?<div className="registr_main_servermessage"><p>Не удалось продолжить регистрацию. Попробуйте ещё раз</p></div>:''}
     <Registabout  />
     <Continue value={setMessage} />       
    </main>
     </FormProvider>
   
  )
}

export default Registpage