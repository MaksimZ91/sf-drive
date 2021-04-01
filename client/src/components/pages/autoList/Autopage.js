import React, { useEffect } from 'react'
import Autoinfo from './Autoinfo'
import Autolist from './Autollist'
import { connect, useDispatch , useSelector} from 'react-redux'
import { fetchAutoList } from '../../../../redux/actions/actions'


function  Autopage  ()  {

    const dispatch = useDispatch()
    const auto =useSelector((state)=>{
        return state.auto
    })

    useEffect(  ()=>{
         dispatch(fetchAutoList())
      },[])
  

        
        return(
            <>
        <main>
        {(!Object.keys(auto).length==0)?<Autolist/>:<Autoinfo/>}
        </main>
        </>
        )
  
 

    
}



export default Autopage