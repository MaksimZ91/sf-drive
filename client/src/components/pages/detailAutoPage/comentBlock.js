import React from 'react'
import Coment from './coment'


function ComentBlock () {
    return(
        <>
        <section className='comentblock'>
        <p>Отзывы</p>
        <div className='comentblock_raiting'>
            <img src='../src/img/star.svg'/>
            <span>4,5 (4 отзыва)</span>
        </div>
        <div className='comentblock_wrapper'>
        <Coment/>
        <Coment/>
        <Coment/>
        <Coment/> 
        </div>      
        </section>
        </>
    )
}


export default ComentBlock