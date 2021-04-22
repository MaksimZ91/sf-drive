import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAutoOptionsForm } from '../../../../redux/actions/actions'




function Options (){
  const dispatch = useDispatch()
  const addAutoOptions = useSelector((state)=>{
    return state.newAuto.addAutoOptions
})


 const handleChange = e => {
  dispatch(addAutoOptionsForm(addAutoOptions, e))
  }



  return(
    <>    
    <form className="options_auto_form" >
    <p className="new_auto_form_info" >Опции автомобиля</p>
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/isofix.svg'/>Крепления Iosfix</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='isofix' value={addAutoOptions.isofix} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>  
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/srs.svg'/>Подушки безопасности</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='srs' value={addAutoOptions.srs} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>
    <div className="options_auto_form_wrapper" >     
      <p><img src='../src/img/heater.svg'/>Автономный подогреватель</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='heater' value={addAutoOptions.heater} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/auxx.svg'/>AUX-кабель</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='aux' value={addAutoOptions.aux} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/bluetooth.svg'/>Поддержка Bluetooth</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='bluetooth' value={addAutoOptions.bluetooth} onChange={handleChange} />
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/cruiz.svg'/>Круиз-контроль</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='cruizControl' value={addAutoOptions.cruizControl} onChange={handleChange} />
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >     
      <p> <img src='../src/img/condi.svg'/>Кондиционер</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='conditioning' value={addAutoOptions.conditioning} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >     
      <p><img src='../src/img/media.svg'/>Мультимедия</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='multimedia' value={addAutoOptions.multimedia} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/navi.svg'/>Навигация</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='navigation' value={addAutoOptions.navigation} onChange={handleChange} />
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/seatCondi.svg'/>Вентиляция сидений</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='seatCondi' value={addAutoOptions.seatCondi} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >
      <p><img src='../src/img/seatHeater.svg'/>Подогрев сидений</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='seatHeater' value={addAutoOptions.seatHeater} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/trunk.svg'/>Багажник на крыше</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"  name='trunk' value={addAutoOptions.trunk} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/park.svg'/>Парктроники</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='park' value={addAutoOptions.park} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>  
    <div className="options_auto_form_wrapper" > 
      <p><img src='../src/img/camera.svg'/>Камера заднего вида</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox" name='camera' value={addAutoOptions.camera} onChange={handleChange}/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>    
    </form>  
    </>
  )
}

export default Options