import React, { useEffect, useState } from 'react'
import { validationResult } from 'express-validator'
import { useHttp } from '../../../hooks/http.hook'


function Auto (props){
    const [autoPhoto, setAutoPhoto]=useState(null)
    const {request} = useHttp()
   


    useEffect( async () => {      
        const data = await request(`http://localhost:5000/auto/photo/${props.value.id}`)
        console.log(data)
        //setAutoPhoto(data.photoName[0])
       
    },[])

    

/*src={`http://localhost:5000/auto/auto-image/${autoPhoto}`*/
// 

    
    return(
        <>
        <div className='list_wrapper_auto'>
            <img className='list_wrapper_auto_img' src='http://localhost:5000/auto/auto-image/CcXrgc.NWW1U.jpg'/>
            <img className='list_wrapper_auto_imgauto' />
            <div className='list_wrapper_auto_info'>                
                <p className='list_wrapper_auto_info_name'>{props.value.mark} {props.value.model}, {props.value.year}</p>
                <p className='list_wrapper_auto_info_price'>от {props.value.price} ₽/сутки</p>
            </div>
        </div>
        </>
    )
}

export default Auto