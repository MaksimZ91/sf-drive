import React from 'react'
import { NavLink } from 'react-router-dom'







function Autoinfo(){
 
  return (
    <>
    <section className="autoList">
      <img className="autoList_img" src='../src/img/auto_list.svg'/>
      <img className="autoList_mobile" src='../src/img/auto_list_mobile.svg'/>
      <h2 className="autoList_titel">Зарабатывайте на своём<br/> автомобиле</h2>
      <p className="autoList_info">Сдавайте автомобиль в аренду и получайте заработок.</p>
      <NavLink to="/addauto"><button className="autoList_button" >Добавить автомобиль</button></NavLink>          
    </section>
    </>
  )
}

export default Autoinfo