import React, {useState, useEffect, useContext} from 'react'
import List from './List'
import {fixDate} from '../../../js/fixday.js'
import Footer from '../../footer/footer'
import {useHttp} from '../../../hooks/http.hook'
import { useDispatch , useSelector} from 'react-redux'
import { fetchAutoListAll, addStartDate, addEndDate, filterAuto } from '../../../../redux/actions/actions'
import Calendarb from '../../calendarb/calendarb'
import FilterAuto from './filterAuto'
import { useLazyQuery } from '@apollo/react-hooks'
import { FETCH_FILTER_AUTO} from '../../../js/graphql-request'




function Newpage (){
  const {request}=useHttp() 
  const [value, setValue] = useState({city:''});
  const [hide, setHide]=useState(false)
  const [adress, setAdress]=useState([]) 
  const [dataHide, setDataHide]=useState(false) 
  const [type, setType]=useState("")
  const [filter, setFilter]=useState(false)
  const [selectDate, setSelectDate] = useState({calen:''})
  const dispatch = useDispatch()  
  const calendName = 'filter_wrapper_date_currnetmonth'  
  const curentDate = new Date()
    const date = useSelector((state)=>{
    return state.calen
  })
  const { startDate, endDate } = date; 
  const auto = useSelector((state)=>{
    return state.auto.autoFilter
  }) 
 

  useEffect(()=>{
    if(date.startDate||date.endDate)setSelectDate({calen:`${fixDate(date.startDate)}-${fixDate(date.endDate)}`})
    },[date])

  useEffect(()=>{
    setSelectDate({calen:``})
    dispatch(addStartDate(null))
    dispatch(addEndDate(null))
    setFilter(false)
    dispatch(fetchAutoListAll())
    },[])



  const handleCity = event =>{    
    setHide(false)
    setValue({ city:event.target.innerText}) 
    setDataHide(false)  
  }

  const handleChange = event =>{
    setHide(false)    
    setType(event.target.value)
  }
 



  const handelHide = () =>{  
    setHide(!hide) 
  }
  
const [getAutos, { data:{filterAuto:autos}={} }] = useLazyQuery(FETCH_FILTER_AUTO)  
  
const  authorRequest = () => { 
  setHide(false) 
  setFilter(true)
   getAutos({variables:{arendaInput:{startDate, endDate, type}}})  
} 
useEffect(()=>{
  dispatch(filterAuto(autos))
},[autos])

 

    

  const  callApi = async (event) => {
    setDataHide(true)
    setValue({...value, city:event.target.value}) 
    const token = "f05072e0afe10172227f57debd27fa6412b661ab"  
    const payload = await request('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', 
    'POST',{query:event.target.value, count:5}, {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token } )    
      setAdress(payload.suggestions) 
  }

 
  

  return (
    <>
    <main className='auto_list'  >
      <section className='filter'>
        {!filter?<h2 className='filter_titel' >Арендуйте автомобиль</h2 >:''}
        <div className='filter_wrapper'>
          <div className='filter_wrapper_city'>
          <input className='filter_wrapper_city_input' type='text'   value={value.city} onChange={callApi}  required />          
          <label className='filter_wrapper_city_input'>Местоположение</label>     
          {(adress&&dataHide)?<div className='filter_wrapper_city_options'>
           {adress.map(el=><p className='filter_wrapper_city_options_element' name='city' key={el.value} onClick={handleCity} value={el.value} >{el.value}</p>)}
            </div>:''}
          </div>
          <div className='filter_wrapper_date'>
          <input className='filter_wrapper_date_input' type='text'  name='date'  defaultValue={selectDate.calen} onClick={handelHide} required />
          <label className='filter_wrapper_date_input'>Период аренды</label>
          {hide?<Calendarb value={{calendName, date:curentDate}}  />:''}
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