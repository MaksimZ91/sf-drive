import React from 'react'
import FotoBlock from './fotoBlock'
import InfoAutoBlock from './infoAutoBlock'
import DateBlock from './dateBlock'
import ComentBlock from './comentBlock'
import ArendaBlock from './arendaBlock'

function DetailAutoPage (){
    return(
        <>
        <main>
            <div className='back_wrapper'>
                <img className='back_wrapper_arrow' src='../src/img/back_arrow.svg'/>
                <span className='back_wrapper_text'>Назад</span>
            </div>
            <FotoBlock/> 
            <InfoAutoBlock/>           
            <DateBlock/>
            <ComentBlock/>
            <ArendaBlock/>
        </main>        
        </>        
    )
}


export default DetailAutoPage