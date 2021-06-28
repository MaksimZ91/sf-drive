import { useMutation } from '@apollo/client'
import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { showAlert } from '../../../../redux/actions/actions'
import { DELETE_ARENDA } from '../../../js/graphql-request'

function QustionsDelete (props){
    const dispatch = useDispatch()
    
  
    const [deleteArenda, {loading, error, data} ] = useMutation(DELETE_ARENDA, {
        variables:{
            findeArendaInput:{id:props.id}
        }
    })


    const onSubmit = async () =>{
        try {
            await deleteArenda()
            dispatch(showAlert('Бронирование удалено'))
        }catch(error){            
            props.close()
            dispatch(showAlert('Не удалось отменить бронирование. Попробуйте ещё раз'))
            throw new Error(error)
        }
     }




    return(
        <>
        <div className='booking_cart_qustions'>
            <img src='./src/img/close.svg' alt='close' onClick={props.close}/>
            <img src='./src/img/questions_booking.svg' alt='qustion_img'/>
            <p className='booking_cart_qustions_titel'>Удалить бронирование?</p>
            <p className='booking_cart_qustions_text'>Вы не сможете взять этот автомобиль повторно 
            на эти же даты.</p>
            <div className='booking_cart_qustions_wrapper'>
                <button onClick={props.close}>Не удалять</button>
                <button onClick={onSubmit}>Удалить</button> 
                 {(!error&&data)?<Redirect to='/booking'/>:''}
            </div>                
        </div>        
        </>
    )
}

export default QustionsDelete