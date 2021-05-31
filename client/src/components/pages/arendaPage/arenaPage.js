import React from 'react'
import Backarrow from '../../backarrow/backArrow'
import Arendastructure from './arendaStructure'
import Arendainfo from './arendaInfo'
import Arendaoptions from './arendaOptions'
import ArendaCheck from './arendaCheck'



function ArendaPage(){
    const backlink = '/auto'
    const back = 'arenda_back'

    return(
        <>
        <main className='arenda'>
            <Backarrow value={backlink} name={back}/>          
            <h1>Оформление аренды</h1>
            <Arendastructure/>
            <Arendainfo/>
            <Arendaoptions/>
            <ArendaCheck/>           
        </main>
        </>
    )
}

export default ArendaPage