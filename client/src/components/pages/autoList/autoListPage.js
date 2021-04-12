import React, {useState, useEffect} from 'react'
import List from './List'
import Footer from '../../footer/footer'
import {useHttp} from '../../../hooks/http.hook'
import { useDispatch , useSelector} from 'react-redux'
import { fetchAutoListAll } from '../../../../redux/actions/actions'


function Newpage (){
  const {request}=useHttp()
  const [value, setValue] = useState();
  const dispatch = useDispatch()

 

  useEffect(  ()=>{
       dispatch(fetchAutoListAll())
    },[])

  const  callApi = async (event) => {
    setValue(event.target.value)
    const token = "f05072e0afe10172227f57debd27fa6412b661ab"
    console.log(event.target.value)
    const data = await request('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/car_brand', 
    'POST',{query:event.target.value}, {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token } )
      console.log(data)
   


  }



  return (
    <>
    <main className='auto_list'>
      <section className='filter'>
        <h2 className='filter_titel'>Арендуйте автомобиль</h2 >
        <div className='filter_wrapper'>
          <div className='filter_wrapper_city'>
          <input className='filter_wrapper_city_input' type='text'  name='city'value={value} onChange={callApi}  required />
          <label className='filter_wrapper_city_input'>Местоположение</label>         
          </div>
          <div className='filter_wrapper_date'>
          <input className='filter_wrapper_date_input' type='text'  name='date' required />
          <label className='filter_wrapper_date_input'>Период аренды</label>
          </div>
          <div className='filter_wrapper_category'>
          <input className='filter_wrapper_category_input' type='text'  name='category' required />
          <label className='filter_wrapper_category_input'>Категория</label>
          </div>
          <button className='filter_wrapper_button'>Найти</button>
        </div>
      </section>
      <List/> 
    </main>
    <Footer/>
    </>
  )
}

export default Newpage