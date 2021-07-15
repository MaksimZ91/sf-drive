import React, { useState, useEffect, useContext } from 'react'
import Continuestep from '../../continueStep/continuestep'
import { validation } from '../../../js/validationForm'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { showAlert } from '../../../../redux/actions/actions'
import './scss/payment.scss'
import { FormContex } from '../../contextApp'


function PaymentPage (props) {
    const { userId } = useContext(FormContex)
    const [ form, setForm ] = useState({cardNumber:'', cardExpiry:'', cardName:'', cardCvc:''})
    const [ valid, setValid ] = useState(true)
    const [ payStatus, setPayStatus ] = useState('')    
    const [ sessionKey, setPaymontSessionKey  ] = useState(null)
    const { request } = useHttp()
    const dispatch = useDispatch()
    const alert = useSelector((state)=>{
        return state.app.alert
      })
    const auto = useSelector((state)=>{
        return state.auto.currentAuto
    })
    const arenda = useSelector((state)=>{
        return state.arenda.arendaParam
    })
    const arendID = useSelector((state)=>{
        return state.arenda.id
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
            setPayStatus('pending')
            
                       
        } catch (error) {
            
        }
         
    } 
    
    
    useEffect(async ()=>{        
        if(sessionKey){          
            window.PMNTS.loadPinForm(sessionKey)
        }
        while(true)
        { const queryParam = new URLSearchParams({
             paymentSessionKey:sessionKey
         }).toString()
         const payStatusResp = await request(`http://localhost:5000/transfer?${queryParam}`)
         setPayStatus(payStatusResp.paymentStatus)
         if( payStatusResp.paymentStatus !== 'pending'){
             if (payStatusResp.paymentStatus == 'failed'){ 
                 dispatch(showAlert('Оплата не прошла, попробуйте еще раз!'))
             }
             const body = { autoID: auto.id, arendaID:arendID }
             await request(`http://localhost:5000/transfer/updatearenda`, 'POST', body)
             break
         }
         await (async ()=>{
             await new Promise((resolve)=>setTimeout(resolve, 2500))
         })()
     }

    },[ sessionKey ])

    useEffect(()=>{
        setValid(validation(form))
      },[form])

    return(
        <>
        {alert?<Error text={alert}/>:''} 
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
        {payStatus == 'success'?<Redirect to='/sucsess'/>:''}
      
        </>
    )
}
//  
export default PaymentPage