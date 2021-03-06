
import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { fixDate } from '../../js/fixday'

function Auto (props){  
    const [autoPhoto, setAutoPhoto]=useState(null)
    const [hidden, setHidden]=useState(false)
    const {request} = useHttp()

    useEffect( async () => {  
        setHidden(props.hidden)     
        const data = await request(`http://localhost:5000/auto/photo/${props.value.id}`)
        if( data.photoName.length > 0 ){
            return setAutoPhoto(data.photoName[0].photoName)
        }
       setAutoPhoto(null) 
    },[])

    return(
       <div className='myAuto_auto'>
           <img className='myAuto_img'
           src={autoPhoto?`http://localhost:5000/auto/auto-image/${autoPhoto}`:'./src/img/unnamed.jpg'}/>
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
               {props.date?<div>
                   <div className='myAuto_auto_wrapper_date'>
                        <img src='../src/img/date_arenda.svg'/>
                        <p>{fixDate(new Date(props.date.startDay))}-{fixDate(new Date(props.date.endDay))}</p>
                    </div>
               </div>:''}
               {!props.cost?<p className='myAuto_auto_wrapper_price'>{props.value.price} ₽ в сутки</p>:
               <p className='myAuto_auto_wrapper_price'>{props.cost} ₽</p>}
           </div>
       </div>
    )
}

export default Auto