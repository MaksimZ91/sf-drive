import React from 'react'
import {useHttp} from '../../../hooks/http.hook'
const TOKENS_KYES='tokens'







function Autoinfo(){
  const {request} = useHttp()


  const authorRequest = async () => {
    try {
        const auto = await JSON.parse(localStorage.getItem(TOKENS_KYES))
        const form={ userId:auto.userId, mark:'Toyota', model:'Prius',year:'2019', number:'R997SA', vin:'CD12-ASAS1212',
        collor:"черный", volume:'1', power:'100', transmission:'Роботизированная', millege:'100000',numberPTS:'089 1234', price:'1400', priceThreeDays:'1200',
        priceFiveDays:'1000', osago:'GG44444',kasko:'none', privod:'передний', body:'седан', fuel:'бензин'}
        const data = await request('http://localhost:5000/auto/add','POST',{...form})
        console.log(data) 
            
    } catch (e) {
      console.log(e)
                   
    } 
} 
  return (
    <>
    <section className="autoList">
      <img className="autoList_img" src='../src/img/auto_list.svg'/>
      <img className="autoList_mobile" src='../src/img/auto_list_mobile.svg'/>
      <h2 className="autoList_titel">Зарабатывайте на своём<br/> автомобиле</h2>
      <p className="autoList_info">Сдавайте автомобиль в аренду и получайте заработок.</p>
      <button className="autoList_button" onClick={authorRequest}>Добавить автомобиль</button>            
    </section>
    </>
  )
}

export default Autoinfo