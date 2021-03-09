import React from 'react'
import {NavLink} from "react-router-dom"



function Try (){
  return(
    <>
        <section className="try">
        <div className="try_wrapper">
            <img className="try_wrapper_img" src="./src/img/toy.svg"     alt="toy"/>
            <img className="try_wrapper_img_mobile" src="./src/img/toy_mobile.svg"     alt="toy"/>
            <h2>Попробуйте аренду на себе</h2>
            <NavLink to="/registr"><button className="try_wrapper_button">Зарегистрироваться</button></NavLink>
        </div>
        </section>
    </>
  )
}

export default Try