import React from 'react'
import { NavLink } from 'react-router-dom'
import Loader from "react-loader-spinner";



function Continuestep (props){
    
    return(
        <>
        <div className="new_auto_continue">     
        <button className="new_auto_continue_button" type="submit" name="submit" value="Продолжить">            
            <Loader type="TailSpin" color="#FFFFFF" height={24} width={24}/>
        </button>
        </div>
        </>
    )
}

export default Continuestep