import React, { useState, useEffect, useContext }  from 'react'
import { FormContex } from '../../contextApp'
import { useHttp } from '../../../hooks/http.hook'
import ConfirmedMessage from './confimedMessaje'
import ConfirmArenda from './confirmArenda'
import ArendaIsActive from './ArendaIsActive'
import ArendaIsClose from './ArendaIsClose'




function ServiceMessage (props){
    const user = props.value.user
    const { userId } = useContext(FormContex)   
            
        return(
            <>
            {(props.value.body == 'confirm')?<ConfirmedMessage value={props.value} date={props.date}/> :''}
            {(userId == user.id) && (props.value.body == 'confirm')?<ConfirmArenda value={props.value}  date={props.date}/>:''}
            {(props.value.body == 'isActive')?<ConfirmedMessage value={props.value}  date={props.date}/>:''}
            {(userId == user.id) && (props.value.body == 'isActive')?<ArendaIsActive value={props.value}   date={props.date}/>:''}
            {(props.value.body == 'isClose')?<ConfirmedMessage value={props.value}  date={props.date}/>:''}
            {(userId == user.id) && (props.value.body == 'isClose')?<ArendaIsClose  value={props.value}   date={props.date}/>:''}
            {(props.value.body == 'Send')?<ConfirmedMessage value={props.value}  date={props.date}/>:''}
            </>
        )
}

export default ServiceMessage