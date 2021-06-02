import React from 'react'
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';



function Continuestep (props){
    const loading = useSelector((state)=>{
        return state.app.loading
    })
  
 
    
    return(
        <>
        <div className={props.nameClass}>     
        <button className={`${props.nameClass}_button`} type="submit" name="submit" value={props.titel} onClick={props.nextStep} disabled={props.validation}>            
        {loading?<Loader type="TailSpin" color="#FFFFFF" height={24} width={24}/>:props.titel}
        </button>
        </div>
        </>
    )
}

export default Continuestep