import React from 'react'
import Dopoptions from './dopOptions'
import Options from './options'
import Continuestep from './continuestep'



function Optionsautopage (){
  
  
  const nextPage = '/addauto/photo'
  return(
    <>
    <main>
    <section className="options_auto">
    <div className="options_auto_titel">
   <p>Шаг 2 из 4</p>
   <p>Дополнительно</p>
    </div>
    <Options/>
    <Dopoptions/>
    <Continuestep value={nextPage}/>    
    </section>  
    </main>
    </>
  )
}

export default Optionsautopage