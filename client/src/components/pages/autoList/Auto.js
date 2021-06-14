
import React, { useEffect, useState } from 'react'
import { useHttp } from '../../../hooks/http.hook'

function Auto (props){
    const [autoPhoto, setAutoPhoto]=useState(null)
    const [hidden, setHidden]=useState(false)
    const {request} = useHttp()

    useEffect( async () => {  
        setHidden(props.hidden)     
        const data = await request(`http://localhost:5000/auto/photo/${props.value.id}`)
        setAutoPhoto(data.photoName[0].photoName)
    },[])

    return(
       <div className='myAuto_auto'>
           <img className='myAuto_img' src={`http://localhost:5000/auto/auto-image/${autoPhoto}`}/>
           <div className='myAuto_auto_wrapper'>
               <div className='myAuto_auto_wrapper_status'>
                   <img src='../src/img/golden_star.svg'/>
                   <span>4,5 (12)</span>
               </div>
               <p className='myAuto_auto_wrapper_name'>{props.value.mark} {props.value.model}, {props.value.year}</p>
               {hidden?'':<div className='myAuto_auto_wrapper_tech'>
                    <div className='myAuto_auto_wrapper_tech_motor'>
                        <img src='../src/img/motor.svg'/>
                        <p>{props.value.volume} л / {props.value.power} л.с. / Бензин</p>
                    </div>
                    <div  className='myAuto_auto_wrapper_tech_kpp'>
                        <img src='../src/img/kpp.svg'/>
                        <p>{props.value.transmission} / {props.value.privod} привод</p>
                    </div>
               </div>}
               <p className='myAuto_auto_wrapper_price'>{props.value.price} ₽ в сутки</p>
           </div>

       </div>
    )
}

export default Auto