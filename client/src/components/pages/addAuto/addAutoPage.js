import React from 'react'
import Aboutautoinfo from './aboutAutoInfo'
import Priceauto from './priceAuto'
import Insurance from './insurance'
import Continuestep from './continuestep'


function Addautopage(){
  const nextPage = '/addauto/options'
  return(
    <>
    <main>
    <section className="new_auto">
    <div className="new_auto_titel">
   <p>Шаг 1 из 4</p>
   <p>Новый автомобиль</p>
    </div>
    <Aboutautoinfo/>
    <Priceauto/>
    <Insurance/> 
    <Continuestep value={nextPage}/>    
    </section>  
    </main>
    </>
  )
}


export default Addautopage