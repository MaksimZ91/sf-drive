import React, {useState, useEffect} from 'react'
import List from './List'
import axios, { CancelToken } from 'axios'
import Footer from '../../footer/footer'
import {useHttp} from '../../../hooks/http.hook'
import { useDispatch , useSelector} from 'react-redux'
import { fetchAutoListAll, addStartDate, addEndDate } from '../../../../redux/actions/actions'
import Calendarb from '../detailAutoPage/calendarb'


function Newpage (){
  const {request}=useHttp()
  const [value, setValue] = useState({city:''});
  const [hide, setHide]=useState(false)
  const [data, setData]=useState(null)
  const [error, setError]=useState(null)
  const dispatch = useDispatch()  
  const calendName = 'filter_wrapper_date_currnetmonth'  
  const curentDate = new Date()
  const date = useSelector((state)=>{
    return state.calen
  })

  const hadelChange = event =>{
    setValue({value, city:event.target.innerText})   
  }

  const handelHide = () =>{
    setHide(!hide)
  }

  useEffect (()=>{
    dispatch(addStartDate(null))
    dispatch(addEndDate(null))
},[])

const authorRequest = async () => { 
  await axios.post('http://localhost:5000/auto/filter/aa', date )
  
} 
  useEffect(  ()=>{
       dispatch(fetchAutoListAll())
    },[])

  const  callApi = async (event) => {
    setValue({...value, city:event.target.value}) 
    const token = "f05072e0afe10172227f57debd27fa6412b661ab"  
    const data = await request('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', 
    'POST',{query:event.target.value}, {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token } )
      setData(data.suggestions)
  }
  

  return (
    <>
    <main className='auto_list'  >
      <section className='filter'>
        <h2 className='filter_titel'>Арендуйте автомобиль</h2 >
        <div className='filter_wrapper'>
          <div className='filter_wrapper_city'>
          <input className='filter_wrapper_city_input' type='text'   value={value.city} onChange={callApi}  required />          
          <label className='filter_wrapper_city_input'>Местоположение</label>     
          {data?data.map(el=> <div className='filter_wrapper_city_options' name='city' key={el.value} onClick={hadelChange} value={el.data.city}>{el.data.city}</div>):''}
          </div>
          <div className='filter_wrapper_date'>
          <input className='filter_wrapper_date_input' type='text'  name='date'  onClick={handelHide} required />
          <label className='filter_wrapper_date_input'>Период аренды</label>
          {hide?<Calendarb value={{calendName, date:curentDate}}/>:''}
          </div>
          <div className='filter_wrapper_category'>
          <input className='filter_wrapper_category_input' type='text'  name='category' required />
          <label className='filter_wrapper_category_input'>Категория</label>
          </div>
          <button className='filter_wrapper_button'  onClick={authorRequest} >Найти</button>
        </div>
      </section>
      <List/> 
    </main>
    <Footer/>
    </>
  )
}

export default Newpage