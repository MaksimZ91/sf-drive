import React, { useState, useEffect, useContext }  from 'react'
import moment from 'moment'
import { FormContex } from '../../contextApp'
import { useHttp } from '../../../hooks/http.hook'


function ServiceMessage (props){
    const user = props.value.user
    const { userId } = useContext(FormContex)   
    const [ arenda, setArenda ] = useState(null)
    const { request } = useHttp()
    console.log(user.id, userId)

    useEffect(async ()=>{
        if(props.value.arendaID){
        try {
            
            const result = await request(`http://localhost:5000/arenda/findearenda?arendaID=${props.value.arendaID}`)
            setArenda(result)
          
      
            
        } catch (error) {
            
        } 
    }  

    },[])

  
        
        return(
            <>            
            {!(userId == user.id) && (props.value.body == 'created')?<div>запро подтв</div>:''}
            {(props.value.body == 'conf')?<div>подтв</div>:''}
            {(userId == user.id) && (props.value.body == 'conf')?<div>запрос на стар аренды</div>:''}
            {(props.value.body == 'confStart')?<div>подтв</div>:''}
            {(userId == user.id) && (props.value.body == 'confStart')?<div>запрос на стар аренды</div>:''}
            {(props.value.body == 'close')?<div>подтв</div>:''}
            </>
        )

    
    


   
}

export default ServiceMessage