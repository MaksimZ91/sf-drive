import React from 'react'
import Auto from '../autoList/Auto'
import {useHttp} from '../../../hooks/http.hook'
const TOKENS_KYES='tokens'

function Autolist (){
    const {request} = useHttp()
    const data = JSON.parse(localStorage.getItem(TOKENS_KYES))
    const form={ userId:data.userId, mark:'toyota', model:'filder',year:'1991', number:'Y234as', vin:'fdfdfdfdf',
    collor:"white", volume:'3', power:'230', transmission:'auto', millege:'234000',numberPTS:'sdsdsd',


    }


    const authorRequest = async () => {
        try {
            const data = await request('http://localhost:5000/auto/add','POST',{...form})
            console.log(data) 
                
        } catch (e) {
          console.log(e)
                       
        } 
    }   

    return(
        <>
        <section className='myAuto'>
        <h1 className='myAuto_titel'>Мои автомобили</h1>
        
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