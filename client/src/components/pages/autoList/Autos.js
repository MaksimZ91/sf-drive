import React from 'react'


function Auto (props){


    
    return(
        <>
        <div className='list_wrapper_auto'>
            <img className='list_wrapper_auto_img'/>
            <div className='list_wrapper_auto_info'>
                <p className='list_wrapper_auto_info_name'>{props.value.mark} {props.value.model}, {props.value.year}</p>
                <p className='list_wrapper_auto_info_price'>от {props.value.price} ₽/сутки</p>
            </div>
        </div>
        </>
    )
}

export default Auto