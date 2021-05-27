import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Auto from '../autoList/Auto'



function ArendaPage(){
    let history = useHistory()
    const auto =useSelector((state)=>{
        return state.auto.currentAuto
    })
 


const handleClick = () =>{
    history.goBack('/auto')

}

    return(
        <>
        <main>
            <div className='back' onClick={handleClick}>
                <img className='back_arrow' src='../src/img/back_arrow.svg'/>
                <span className='back_text'>Назад</span>             
            </div>
            <h1>Оформление аренды</h1>
            <section>
                <p>Состав заказа</p>
               <Auto hidden={true} value={auto}/>
            </section>
            <section></section>
            <section></section>
        </main>
        </>
    )
}

export default ArendaPage