import React from 'react'
import Footer from  '../../footer/footer'
import Titel from './titelSection'
import Auto from './autoSection'
import Guide from './guideSection'
import Guideforowner from './guideForOwnerSection'
import Slider from './sliderSection'
import Try from './TrySection'
import Garantee from './guranteeSection'
import Info from './infoSection'




function Mainpage (){
  return(
    <>
    <main>
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