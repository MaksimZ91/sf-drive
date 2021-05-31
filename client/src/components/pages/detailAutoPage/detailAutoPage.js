import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"
import FotoBlock from './fotoBlock'
import InfoAutoBlock from './infoAutoBlock'
import DateBlock from './dateBlock'
import ComentBlock from './comentBlock'
import ArendaBlock from './arendaBlock'
import { useSelector, useDispatch } from 'react-redux'
import {addEndDate, addStartDate, fetchAuto } from '../../../../redux/actions/actions'
import Backarrow from '../../backarrow/backArrow'

function DetailAutoPage (props){ 
    const dispatch = useDispatch()
    const auto = useSelector((state)=>{
        return state.auto.currentAuto
    })
    const calen = useSelector((state)=>{
        return state.calen
    })

    const backlink = "/myAuto"
    const backName = 'back_wrapper'


    useEffect (()=>{
        dispatch(addStartDate(null))
        dispatch(addEndDate(null))
    },[])
    
  

   

    return(
        <>
        <main>
            <Backarrow value={backlink} name={backName} />
            <FotoBlock/> 
            <InfoAutoBlock/>           
            <DateBlock/>
            <ComentBlock/>
            <ArendaBlock auto={auto.id} />
        </main>        
        </>        
    )
}


export default DetailAutoPage