import React from 'react'



function Info (){
  return(
    <>
    <section className="info">
            <div className="info_wrapper">
                <img className="info_wrapper_img" src="./src/img/undraw_fast_car_p4cu 1.svg"     alt="girl on car"/>
                <img className="info_wrapper_img_mobile" src="./src/img/undraw_fast_car_mobile.svg"  alt="girl on car"/> 
                <div className="info_wrapper_text">
                    <h2>Аренда напрямую<br/> от владельцев</h2>
                    <p>Вы получите автомобиль от его собственника,<br/>а мы проверим юридическую чистоту<br/> и техническую исправность.</p>
                </div>
            </div>
        </section>
    </>
  )
}


export default Info