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
import Authorpage from '../autn/authorPgae'
import Recovery from "../autn/recoveryPage";
import { FormContex } from '../../contextApp'



function Mainpage (){
  const {openAuthor, setOpenAuthor, recovery, setRecovery} = useContext(FormContex)
  
  
  

  return(
    <>
    <main className={(recovery||openAuthor)?'activeMain':''}>
      {openAuthor?<Authorpage value={{recov:setRecovery,closeAuthor:setOpenAuthor}}/>:""}
      {recovery?<Recovery value={{recov:setRecovery,backStep:setOpenAuthor}}/>:""} 
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