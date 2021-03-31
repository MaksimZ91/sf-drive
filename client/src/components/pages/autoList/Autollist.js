import React from 'react'
import Auto from '../autoList/Auto'
import {useHttp} from '../../../hooks/http.hook'
const TOKENS_KYES='tokens'

function Autolist (){
    const {request} = useHttp()
   


    const authorRequest = async () => {
        try {
            const auto = await JSON.parse(localStorage.getItem(TOKENS_KYES))
            const form={ userId:auto.userId, mark:'nissan', model:'calaris',year:'1991', number:'Y33as', vin:'fdfdfdfdf',
            collor:"white", volume:'3', power:'230', transmission:'auto', millege:'23422000',numberPTS:'sdsdsd'}
            const data = await request('http://localhost:5000/auto/add','POST',{...form})
            console.log(data) 
                
        } catch (e) {
          console.log(e)
                       
        } 
    } 
    
    const test = async () =>{
        try {
            const auto = await JSON.parse(localStorage.getItem(TOKENS_KYES))
            const form={ userId:auto.userId }
            const data = await request('http://localhost:5000/auto/606419705cb47232289b76ba','GET')
            console.log(data) 
                
        } catch (e) {
          console.log(e)
                       
        } 

    }

    return(
        <>
        <section className='myAuto'>
        <h1 className='myAuto_titel' onClick={test}>Мои автомобили</h1>
        
        <Auto/>  
        <Auto/>  
                
        </section>
        <section className='add_auto' >
            <button className='add_auto_button' onClick={authorRequest} >Добавить автомобиль</button> 
        </section>
        </>
    )
}

export default Autolist