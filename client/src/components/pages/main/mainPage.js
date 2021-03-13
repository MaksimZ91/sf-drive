import React, {useContext, useState} from 'react'
import Footer from  '../../footer/footer'
import Titel from './titelSection'
import Auto from './autoSection'
import Guide from './guideSection'
import Guideforowner from './guideForOwnerSection'
import Slider from './sliderSection'
import Try from './TrySection'
import Garantee from './guranteeSection'
import Info from './infoSection'
import Authorpage from './authorPgae'
import Recovery from "./recoveryPage";
import { FormContex } from '../../contextApp'



function Mainpage (){
  const {openAuthor, setOpenAuthor, recovery, setRevocery} = useContext(FormContex)
  
  
  

  return(
    <>
    <main className={(recovery||openAuthor)?'activeMain':''}>
      {openAuthor?<Authorpage value={{recov:setRevocery,closeAuthor:setOpenAuthor}}/>:""}
      {recovery?<Recovery value={{recov:setRevocery,backStep:setOpenAuthor}}/>:""} 
      <Titel/>   
      <Info/>
      <Auto/>
      <Garantee/>
      <Guide/>
      <Guideforowner/>
      <Slider/>
      <Try/>
    </main>
    <Footer/>
    </>

  )
}

export default Mainpage