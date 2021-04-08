import React from 'react'
import Auto from '../autoList/Auto'
import {useHttp} from '../../../hooks/http.hook'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchAuto }from '../../../../redux/actions/actions'
const TOKENS_KYES='tokens'

function Autolist (){
    const {request} = useHttp()
   const dispatch = useDispatch()

   const auto = useSelector((state)=>{
    return state.auto.userAuto
})
console.log(auto)


    const authorRequest = async () => {
        try {
            const auto = await JSON.parse(localStorage.getItem(TOKENS_KYES))
            const form={ userId:auto.userId, mark:'Toyota', model:'Camry',year:'2019', number:'R997SA', vin:'CD12-ASAS1212',
            collor:"черный", volume:'2.5', power:'200', transmission:'Автоматичекая', millege:'210000',numberPTS:'089 1234', price:'1600', priceThreeDays:'1400',
            priceFiveDays:'1200', osago:'GG44444',kasko:'none', privod:'передний'}
            const data = await request('http://localhost:5000/auto/add','POST',{...form})
            console.log(data) 
                
        } catch (e) {
          console.log(e)
                       
        } 
    } 
    
   
    return(
        <>
        <section className='myAuto'>
        <h1 className='myAuto_titel' onClick={()=>dispatch(fetchAutoList())}>Мои автомобили</h1>
        {auto.map(el => <NavLink to="/auto"  onClick={()=>dispatch(fetchAuto(el._id))}  key={el._id} ><Auto value={el}/></NavLink>)}                
        </section>
        <section className='add_auto' >
            <button className='add_auto_button'onClick={authorRequest} >Добавить автомобиль</button> 
        </section>
        </>
    )
}

export default Autolist