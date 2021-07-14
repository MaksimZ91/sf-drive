import React from 'react'

function Cart (props) {

  const handelChange = (e) => {
     props.setForm({...props.value, [e.target.name]:e.target.value})
  }  



  return(
   <>
     <section className='payment_cart'>
            <h1 className='payment_cart_titel'>Оплата картой</h1>
            <form className='payment_cart_form'>
                <div className='payment_cart_form_wrapper'>
                    <div className='payment_cart_form_wrapper_content'>
                        <p className='payment_cart_form_wrapper_content_cartNumber'>Номер карты<input type='number' name='cartNumber' onChange={handelChange} placeholder='0000 0000 0000 0000' value={props.value.cartNumber}/></p>
                        <p className='payment_cart_form_wrapper_content_dateRange'>Срок действия<input type='number' name='dateRange' onChange={handelChange} placeholder='00/00' value={props.value.dateRange} /></p>
                    </div>                
                <p className='payment_cart_form_wrapper_user'>Держатель карты<input type='text' name='user' onChange={handelChange} placeholder='IVAN IVANOV' value={props.value.user}/></p>
                </div>
                <div className='payment_cart_form_avers'>
                    <p className='payment_cart_form_avers_cvv'>CVV<input type='number' name='cvv' onChange={handelChange} placeholder='000' value={props.value.cvv}/></p>
                </div>
            </form>
        </section>
   </>
  )
}

export default Cart