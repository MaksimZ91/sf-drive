import React from 'react'
import { NavLink } from 'react-router-dom'



function Continuestep (props){
    
    return(
        <>
        <div className="new_auto_continue">
        <NavLink to={props.value}><input className="new_auto_continue_button" type="submit" name="submit" value="Продолжить"  /></NavLink>
        </div>
        </>
    )
}

export default Continuestep