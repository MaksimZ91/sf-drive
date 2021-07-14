import React, { useState, useEffect, useContext } from 'react'
import Continuestep from '../../continueStep/continuestep'
import { validation } from '../../../js/validationForm'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector } from 'react-redux'
import './scss/payment.scss'
import { FormContex } from '../../contextApp'


function PaymentPage (props) {
    const { userId } = useContext(FormContex)
    const [ form, setForm ] = useState({cardNumber:'', cardExpiry:'', cardName:'', cardCvc:''})
    const [ valid, setValid ] = useState(true)
    const [ paymontSessionKey, setPaymontSessionKey  ] = useState(null)
    const { request } = useHttp()
    const auto = useSelector((state)=>{
        return state.auto.currentAuto
    })
    const arenda = useSelector((state)=>{
        return state.arenda.arendaParam
    })
    const handelChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const continueTitel ='Оплатить'
    const nameClass = 'payment_continue'
   
    const authorRequest = async () => { 
        try {
            const result =await request('http://localhost:5000/transfer','POST', {...form, toUserAuto:auto.id, userID:userId, amount:arenda.cost })
            setPaymontSessionKey(result.paymentSessionKey)
            
                       
        } catch (error) {
            
        }
         
    } 
    
    useEffect(()=>{

        console.log(paymontSessionKey)
        if(paymontSessionKey){
          
            window.PMNTS.loadPinForm(paymontSessionKey) 
        }
    },[paymontSessionKey])

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
                        <p className='payment_form_wrapper_content_cartNumber'>Номер карты<input type='text' name='cardNumber' onChange={handelChange} value={form.cardNumber}/></p>
                        <p className='payment_form_wrapper_content_dateRange'>Срок действия<input type='text' name='cardExpiry' onChange={handelChange} value={form.cardExpiry} /></p>
                    </div>                
                <p className='payment_form_wrapper_user'>Держатель карты<input type='text' name='cardName' onChange={handelChange} value={form.cardName}/></p>
                </div>
                <div className='payment_form_avers'>
                    <p className='payment_form_avers_cvv'>CVV<input type='text' name='cardCvc' onChange={handelChange} value={form.cardCvc}/></p>
                </div>
            </form>
        </section>
        <Continuestep titel={continueTitel} validation={valid} nextStep={authorRequest} nameClass={nameClass} />
        </>
    )
}

export default PaymentPage