import React from 'react'
import { useHistory } from 'react-router-dom'



function Backarrow (props){
    let history = useHistory()

    const handleClick = () =>{
    history.push(props.value)
}

    return(
        <>
         <div className={`${props.name}`} onClick={handleClick}>
                <img className={`${props.name}_arrow`} src='../src/img/back_arrow.svg'/>
                <span className={`${props.name}_text`}>Назад</span>             
            </div>
        </>
    )
}

export default Backarrow