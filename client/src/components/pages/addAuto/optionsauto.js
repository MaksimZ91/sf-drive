import React from 'react'
import Dopoptions from './dopOptions'
import Options from './options'
import Continuestep from './continuestep'



function Optionsautopage (){
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
    <Continuestep/>    
    </section>  
    </main>
    </>
  )
}

export default Optionsautopage