import React from 'react'



function Insurance (){
  return(
    <>
     <form className="new_auto_insurance" >
    <p className="new_auto_insurance_info" >Стоимость аренды</p>
    <p>Полис ОСАГО<input className="new_auto_insurance_osago" /></p>
    <p>Полис КАСКО (если есть)<input className="new_auto_insurance_osago"/></p>
    </form>
    </>
  )
}

export default Insurance