import React, { useState, useEffect } from 'react'
import Continuestep from '../../continueStep/continuestep'
import { validation } from '../../../js/validationForm'
import './scss/payment.scss'


function PaymentPage () {
    const [ form, setForm ] = useState({cartNumber:'', dateRange:'', user:'', CVV:''})
    const [ valid, setValid ] = useState(true)
    

    const handelChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const continueTitel ='Оплатить'
    const nameClass = 'payment_continue'
   
    const authorRequest = async () => { 
        try { 
           console.log('1')
        } catch (e) {
         
        }     
    } 

    useEffect(()=>{
        setValid(validation(form))
      },[form])

    return(
        <>
        <section className='payment'>
            <h1 className='payment_titel'>Оплата картой</h1>
            <form className='payment_form'>
                <div className='payment_form_wrapper'>
                    <div className='payment_form_wrapper_content'>
                        <p className='payment_form_wrapper_content_cartNumber'>Номер карты<input type='text' name='cartNumber' onChange={handelChange} value={form.cartNumber}/></p>
                        <p className='payment_form_wrapper_content_dateRange'>Срок действия<input type='text' name='dateRange' onChange={handelChange} value={form.dateRange} /></p>
                    </div>                
                <p className='payment_form_wrapper_user'>Держатель карты<input type='text' name='user' onChange={handelChange} value={form.user}/></p>
                </div>
                <div className='payment_form_avers'>
                    <p className='payment_form_avers_cvv'>CVV<input type='text' name='CVV' onChange={handelChange} value={form.CVV}/></p>
                </div>
            </form>
        </section>
        <Continuestep titel={continueTitel} validation={valid} nextStep={authorRequest} nameClass={nameClass} />
        </>
    )
}

export default PaymentPage