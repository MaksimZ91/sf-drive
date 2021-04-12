import React from 'react'
import Aboutautoinfo from './aboutAutoInfo'
import Priceauto from './priceAuto'
import Insurance from './insurance'


function Addautopage(){
  return(
    <>
    <main>
    <section className="add_auto">
    <div className="add_auto_titel">
   <p>Шаг 1 из 4</p>
   <p>Новый автомобиль</p>
    </div>
    <Aboutautoinfo/>
    <Priceauto/>
    <Insurance/>     
    </section>  
    </main>
    </>
  )
}


export default Addautopage