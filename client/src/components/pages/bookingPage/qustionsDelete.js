import React from 'react'

function QustionsDelete (props){
    return(
        <>
        <div className='booking_cart_qustions'>
            <img src='./src/img/close.svg' alt='close' onClick={props.close}/>
            <img src='./src/img/questions_booking.svg' alt='qustion_img'/>
            <p className='booking_cart_qustions_titel'>Удалить бронирование?</p>
            <p className='booking_cart_qustions_text'>Вы не сможете взять этот автомобиль повторно 
            на эти же даты.</p>
            <div className='booking_cart_qustions_wrapper'>
                <button>Не удалять</button>
                <button>Удалить</button>   
            </div>                
        </div>
        </>
    )
}

export default QustionsDelete