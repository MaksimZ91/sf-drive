import React from 'react'
import {NavLink} from "react-router-dom"


function Titel (){
  return (
    <>
     <section className="titel">
            <div className="titel_wrapper">
                <h1>Каршеринг в любой<br/> точке России </h1>
                <p>Будьте всегда за рулём во время путешествий и командировок.</p>
                <NavLink to="/registr"><button className="titel_wrapper_button">Зарегистрироваться</button></NavLink>
            </div>
        </section>
        
    </>
  )
}

export default Titel