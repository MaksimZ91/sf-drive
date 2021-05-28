import React from 'react'
import { useHistory } from 'react-router-dom'



function Backarrow (props){
    let history = useHistory()

    const handleClick = () =>{
    history.push(props.value)
}

    return(
        <>
         <div className='back' onClick={handleClick}>
                <img className='back_arrow' src='../src/img/back_arrow.svg'/>
                <span className='back_text'>Назад</span>             
            </div>
        </>
    )
}

export default Backarrow