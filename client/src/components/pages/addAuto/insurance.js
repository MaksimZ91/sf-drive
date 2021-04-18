import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAutoForm } from '../../../../redux/actions/actions'




function Insurance (){
  const dispatch = useDispatch()
  const addAuto = useSelector((state)=>{
    return state.newAuto.addAuto
})

 const handleChange = e => {
  dispatch(addAutoForm(addAuto, e))
  }
  return(
    <>
     <form className="new_auto_insurance" >
    <p className="new_auto_insurance_info" >Стоимость аренды</p>
    <p>Полис ОСАГО<input className="new_auto_insurance_osago" name='osago' value={addAuto.osago} onChange={handleChange} placeholder='XXX 000000000'/></p>
    <p>Полис КАСКО (если есть)<input className="new_auto_insurance_osago" name='kasko' value={addAuto.kasko} onChange={handleChange} placeholder='XXX 000000000' /></p>
    </form>
    </>
  )
}

export default Insurance