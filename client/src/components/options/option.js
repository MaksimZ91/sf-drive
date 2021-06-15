import React from 'react'
import { useDispatch} from 'react-redux'


function Option (props){
    const dispatch = useDispatch()

    const handleChange = e => {
        const name = e.target.name
        const data = e.target.checked
        dispatch(props.settings.addOptions(props.settings.state, name, data))
    }
     

    return(
        <>
           <div className={`${props.settings.className}_wrapper`}>
                <div className={`${props.settings.className}_wrapper_text`}>
                    <p>{props.settings.titel}</p>
                    <p>{props.settings.text}</p>
                </div>
                <div className={`${props.settings.className}_wrapper_price`}>
                    <p>{props.settings.cost}₽</p>      
                    {props.settings.checked?<label className={`${props.settings.className}_wrapper_price_switch`}>
                        <input className={`${props.settings.className}_wrapper_price_switch_checkbox`} type="checkbox" name={props.settings.name}  onChange={handleChange}/>
                        <span className={`${props.settings.className}_wrapper_price_switch_slider`}/>
                    </label>:''}
                </div>     
            </div>
        </>
         
    )
}


export default Option