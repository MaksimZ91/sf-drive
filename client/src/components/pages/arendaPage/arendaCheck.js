import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addArenda } from '../../../../redux/actions/actions.js'
import { fixDate } from '../../../js/fixday.js'
import { getCostOptions, getCostArenda, getFullPrice } from '../../../js/utils.js'


function ArendaCheck (props){  
const dispatch = useDispatch()  
const [selectDate, setSelectDate] = useState({calen:''})
const [optionCost, setOptiosnCost] = useState(0)
const [arendaCost, setArendaCost] = useState(0)
const [arendaFullPrice, setArendaFullPrice] = useState(0)
const SERVICE_COMMISSION = 1000
const option = useSelector((state)=>{
    return state.newAuto.dopOptions
}) 
const totalCost = useSelector ((state)=>{
    return state.arenda.arendaParam
})
useEffect(()=>{
    if(props.startDate||props.endDate)setSelectDate({calen:`${fixDate(props.startDate)}-${fixDate(props.endDate)}`})
    setOptiosnCost((getCostOptions(option)))
    setArendaCost(getCostArenda(props.startDate, props.endDate, props.priceFiveDays,props.priceThreeDays,props.price ))  
    setArendaFullPrice(getFullPrice(props.startDate, props.endDate, props.price))
    const total =arendaCost + optionCost + SERVICE_COMMISSION
    dispatch(addArenda(totalCost,'cost', total))   
    },[props.startDate, props.endDate, option, arendaCost, optionCost])


    return(
        <>
         <section className='arenda_check'>
             <p>Ваш чек</p>
             <div className='arenda_check_price'>
                 <div className='arenda_check_price_cost'>
                     <p>Стоимость аренды</p>
                     <p>{arendaCost} ₽</p>
                 </div>
                 <div className='arenda_check_price_discount'>
                     <p>{selectDate.calen}</p>
                     <p>{arendaFullPrice} ₽</p>
                 </div>
             </div>
             <div className='arenda_check_options'>
                 <p>Доп. услуги</p>
                 <p>{optionCost} ₽</p>
             </div>
             <div className='arenda_check_commission'>
                 <p>Комиссия сервиса</p>
                 <p>1000 ₽</p>
             </div>
             <div className='arenda_check_total'>
                 <p>К оплате</p>
                 <p>{totalCost.cost} ₽</p>
             </div>
         </section>
        </>
    )
}
export default ArendaCheck