import React, {useState, useEffect} from 'react'
import List from './List'
import axios, { CancelToken } from 'axios'
import {fixDate} from '../../../js/fixday.js'
import Footer from '../../footer/footer'
import {useHttp} from '../../../hooks/http.hook'
import { useDispatch , useSelector} from 'react-redux'
import { fetchAutoListAll, addStartDate, addEndDate, filterAuto } from '../../../../redux/actions/actions'
import Calendarb from '../detailAutoPage/calendarb'
import FilterAuto from './filterAuto'


function Newpage (){
  const {request}=useHttp()
  const [value, setValue] = useState({city:''});
  const [hide, setHide]=useState(false)
  const [data, setData]=useState(null)
  const [type, setType]=useState(null)
  const [filter, setFilter]=useState(false)
  const [selectDate, setSelectDate] = useState({calen:''})
  const [error, setError]=useState(null)
  const dispatch = useDispatch()  
  const calendName = 'filter_wrapper_date_currnetmonth'  
  const curentDate = new Date()
  const date = useSelector((state)=>{
    return state.calen
  })
  const auto = useSelector((state)=>{
    return state.auto.autoFilter
  })

  const handleCity = event =>{
    setValue({ city:event.target.innerText})   
  }

  const handleChange = event =>{
    setType(event.target.value)
  }

  const handelHide = () =>{
    setHide(!hide) 
  }

  /*useEffect(()=>{
    setSelectDate({calen:`${fixDate(date.startDate)}-${fixDate(date.endDate)}`})  
  },[])*/


  useEffect (()=>{
    dispatch(addStartDate(null))
    dispatch(addEndDate(null))
},[])

const authorRequest = async () => {
  setFilter(true)
  dispatch(filterAuto(date))
} 
  useEffect(  ()=>{
        setFilter(false)
       dispatch(fetchAutoListAll())
    },[])

  const  callApi = async (event) => {
    setValue({...value, city:event.target.value}) 
    const token = "f05072e0afe10172227f57debd27fa6412b661ab"  
    const data = await request('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', 
    'POST',{query:event.target.value, count:5}, {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token } )
      setData(data.suggestions)
  }
  

  return (
    <>
    <main className='auto_list'  >
      <section className='filter'>
        {!filter?<h2 className='filter_titel'>Арендуйте автомобиль</h2 >:''}
        <div className='filter_wrapper'>
          <div className='filter_wrapper_city'>
          <input className='filter_wrapper_city_input' type='text'   value={value.city} onChange={callApi}  required />          
          <label className='filter_wrapper_city_input'>Местоположение</label>     
          {data?<div className='filter_wrapper_city_options'>
           {data.map(el=><p className='filter_wrapper_city_options_element' name='city' key={el.value} onClick={handleCity} value={el.value} >{el.value}</p>)}
            </div>:''}
          </div>
          <div className='filter_wrapper_date'>
          <input className='filter_wrapper_date_input' type='text'  name='date' defaultValue='' value={selectDate.calen} onClick={handelHide} required />
          <label className='filter_wrapper_date_input'>Период аренды</label>
          {hide?<Calendarb value={{calendName, date:curentDate}}/>:''}
          </div>
          <div className='filter_wrapper_category'>
          <select className="filter_wrapper_category_input" name='type' value={type} onChange={handleChange}>
            <option></option>
            <option value='Легковой'>Легковой</option>
            <option value='Грузовой'>Грузовой</option>
            <option value='Грузовой'>Микроавтобус</option>
            <option value='Мотоциклы'>Мотоциклы</option>
            </select>
            <label className='filter_wrapper_category_input'>Категория</label>            
          </div>
          <button className='filter_wrapper_button'  onClick={authorRequest} >Найти</button>
        </div>
      </section>
      {!(filter&&auto)?<List/>:<FilterAuto/>}
    </main>
    <Footer/>
    </>
  )
}

export default Newpage