import React from 'react'

function FotoBlock (){
    return(
        <>
        <section className='fotoBlock'>
            <img className='fotoBlock_mainfoto' src='../src/img/auto_main.svg'/>
            <img className='fotoBlock_secondfoto'src='../src/img/auto_second.svg' />
            <div className='fotoBlock_wrapper'>
                <img className='fotoBlock_wrapper_otherfoto' src='../src/img/auto_other.svg' />
                <p className='fotoBlock_wrapper_text'>+ еще 5 фото</p>
            </div>
        </section>
        </>
    )
}


export default FotoBlock