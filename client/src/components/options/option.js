import React, { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDopAutoOptionsForm } from '../../../redux/actions/actions'


function Option (props){
    const dispatch = useDispatch()
    const addAutoOptions = useSelector((state)=>{
        return state.newAuto.dopOptions
    })
    const handleChange = e => {
        const name = e.target.name
        const data = e.target.checked
        dispatch(addDopAutoOptionsForm(addAutoOptions, name, data))
    }

    useEffect(()=>{
        dispatch(addDopAutoOptionsForm(addAutoOptions, props.settings.name , false))
    },[])    
     
     

    return(
        <>
           <div className={`${props.settings.className}_wrapper`}>
                <div className={`${props.settings.className}_wrapper_text`}>
                    <p>{props.settings.titel}</p>
                    <p>{props.settings.text}</p>
                </div>
                <div className={`${props.settings.className}_wrapper_price`}>
                    <p>{props.settings.cost}₽</p>      
                    <label className={`${props.settings.className}_wrapper_price_switch`}>
                        <input className={`${props.settings.className}_wrapper_price_switch_checkbox`} type="checkbox" name={props.settings.name}  onChange={handleChange}/>
                        <span className={`${props.settings.className}_wrapper_price_switch_slider`}/>
                    </label> 
                </div>     
            </div>
        </>
         
    )
}


export default Option