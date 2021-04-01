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

    useEffect( async ()=>{
      await dispatch(fetchAutoList())
    },[])
    console.log(auto)
    if(!Object.keys(auto).length==0){
        
        return(
            <>
        <main>
        <Autolist/>
        </main>
        </>
        )
    }else{
        return(
        <>
        <main>
        <Autoinfo/>
        </main>
        </>
        
            )
    }
 

    
}



export default Autopage