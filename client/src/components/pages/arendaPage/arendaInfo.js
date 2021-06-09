import React, { useState, useEffect } from 'react'
import Calendarb from '../../calendarb/calendarb'
import { useDispatch, useSelector } from 'react-redux'
import { fixDate } from '../../../js/fixday.js'
import { addArenda } from '../../../../redux/actions/actions'


function Arendainfo (){
    const dispatch = useDispatch()
    const [hidden, setHidden] = useState(true)
    const [selectDate, setSelectDate] = useState({calen:''})
    const date = useSelector((state)=>{
        return state.calen
      })
      const text = useSelector((state)=>{
        return state.arenda.arendaParam
      })

    const calendName = 'arenda_info_wrapper_currnetmonth'  
    const curentDate = new Date()

    useEffect(()=>{
        if(date.startDate||date.endDate)setSelectDate({calen:`${fixDate(date.startDate)}-${fixDate(date.endDate)}`})
        },[date])

        const handleChange = e => {
            dispatch(addArenda(text,'coment', e.target.value))  
            }


  

    return(
        <>
          <section className='arenda_info'>
                <p>Информация о поездке</p>              
                <div className='arenda_info_wrapper'>
                    <p>Период аренды</p>
                    <input  onClick={()=>setHidden(!hidden)} type='text'  name='date' defaultValue={selectDate.calen} ></input>                   
                    {!hidden?<Calendarb value={{calendName, date:curentDate}}/>:''}
                </div>
                <div className='arenda_info_texarea'>
                    <p>Планы на поездку</p>
                    <textarea  type='textarea' placeholder='Опишите свои планы на поездку для вледельца автомобиля' onChange={handleChange} value={text.coment} ></textarea>                  
                </div>
            </section>
        </>
    )
}

export default Arendainfo