import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { fixDate, arendaDay } from '../../../js/fixday.js'


function ArendaCheck (props){
const [selectDate, setSelectDate] = useState({calen:''})
const option = useSelector((state)=>{
    return state.newAuto.dopOptions
}) 
useEffect(()=>{
    if(props.startDate||props.endDate)setSelectDate({calen:`${fixDate(props.startDate)}-${fixDate(props.endDate)}`})
    })

  

useEffect(()=>{
    const getCostArenda = () =>{
        const arendaDays = arendaDay(props.startDate, props.endDate)
        if(arendaDays >= 5){
            return arendaDays * props.priceFiveDays
        }else if(arendaDays >= 3){
            return arendaDays * props.priceThreeDays 
        }else{
            return arendaDays * props.price
        }
    }
}) 

const getCostOptions = 





    return(
        <>
         <section className='arenda_check'>
             <p>Ваш чек</p>
             <div className='arenda_check_price'>
                 <div className='arenda_check_price_cost'>
                     <p>Стоимость аренды</p>
                     <p>4 800 ₽</p>
                 </div>
                 <div className='arenda_check_price_discount'>
                     <p>{selectDate.calen}</p>
                     <p>5 400 ₽</p>
                 </div>
             </div>
             <div className='arenda_check_options'>
                 <p>Доп. услуги</p>
                 <p>1 000 ₽</p>
             </div>
             <div className='arenda_check_commission'>
                 <p>Комиссия сервиса</p>
                 <p>1 000 ₽</p>
             </div>
             <div className='arenda_check_total'>
                 <p>К оплате</p>
                 <p>6 800 ₽</p>
             </div>
         </section>
        </>
    )
}
export default ArendaCheck