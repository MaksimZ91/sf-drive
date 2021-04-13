import React from 'react'



function Priceauto (){
  return(
    <>
    <form className="new_auto_price" >
    <p className="new_auto_price_info" >Стоимость аренды</p>
    <p>Обычная цена<input className="new_auto_price_current" /></p>
    <p>Цена при аренде на 3 дня<input className="new_auto_price_current"/></p>
    <p>Цена при аренде более 5 дней<input className="new_auto_price_current"/></p>  
    </form>
    </>
  )
}

export default Priceauto