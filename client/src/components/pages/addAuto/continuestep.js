import React from 'react'
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';



function Continuestep (props){
    const loading = useSelector((state)=>{
        return state.app.loading
    })
 
    
    return(
        <>
        <div className="new_auto_continue">     
        <button className="new_auto_continue_button" type="submit" name="submit" value="Продолжить" onClick={props.nextStep} disabled={props.validation}>            
        {loading?<Loader type="TailSpin" color="#FFFFFF" height={24} width={24}/>:'Продолжить'}
        </button>
        </div>
        </>
    )
}

export default Continuestep