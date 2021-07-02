import React, { useState, useEffect } from 'react'
import ServiceMessage from './ServiceMessage'
import UserMessage from './UserMessage'


function Message (props){  
 

    
        return(
            <>
             {(props.value.system)?<ServiceMessage value={props.value} date={props.date}/>:<UserMessage value={props.value} date={props.date}/>}          
            </>
        )

    
     
    
}

export default Message