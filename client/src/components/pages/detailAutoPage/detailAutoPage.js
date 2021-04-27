import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"
import FotoBlock from './fotoBlock'
import InfoAutoBlock from './infoAutoBlock'
import DateBlock from './dateBlock'
import ComentBlock from './comentBlock'
import ArendaBlock from './arendaBlock'
import { useSelector, useDispatch } from 'react-redux'
import {fetchAuto } from '../../../../redux/actions/actions'

function DetailAutoPage (props){ 
    const auto =useSelector((state)=>{
        return state.auto.currentAuto
    })

    let history = useHistory();

    function handleClick() {
      history.push("/myAuto");
    }
  

   

    return(
        <>
        <main>
            <div className='back_wrapper' onClick={handleClick}>
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