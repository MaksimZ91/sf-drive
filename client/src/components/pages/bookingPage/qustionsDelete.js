import { useMutation } from '@apollo/client'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { DELETE_ARENDA } from '../../../js/graphql-request'

function QustionsDelete (props){

    const [deleteArenda, {data} ] = useMutation(DELETE_ARENDA, {
        variables:{
            findeArendaInput:{id:props.id}
        }
    })


    const onSubmit = (e) =>{
        //e.preventDefault()
        deleteArenda()
        props.close()   
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
            </div>                
        </div>
        {(data)?<Redirect to='/booking'/>:''}
        </>
    )
}

export default QustionsDelete