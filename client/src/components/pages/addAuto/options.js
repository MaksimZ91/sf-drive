import React from 'react'



function Options (){
  return(
    <>    
    <form className="options_auto_form" >
    <p className="new_auto_form_info" >Опции автомобиля</p>
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/isofix.svg'/>Крепления Iosfix</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>  
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/srs.svg'/>Подушки безопасности</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>
    <div className="options_auto_form_wrapper" >     
      <p><img src='../src/img/heater.svg'/>Автономный подогреватель</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/auxx.svg'/>AUX-кабель</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/bluetooth.svg'/>Поддержка Bluetooth</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/cruiz.svg'/>Круиз-контроль</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >     
      <p> <img src='../src/img/condi.svg'/>Кондиционер</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >     
      <p><img src='../src/img/media.svg'/>Мультимедия</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/navi.svg'/>Навигация</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/seatCondi.svg'/>Вентиляция сидений</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >
      <p><img src='../src/img/seatHeater.svg'/>Подогрев сидений</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/trunk.svg'/>Багажник на крыше</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div> 
    <div className="options_auto_form_wrapper" >      
      <p><img src='../src/img/park.svg'/>Парктроники</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>  
    <div className="options_auto_form_wrapper" > 
      <p><img src='../src/img/camera.svg'/>Камера заднего вида</p>
      <label className="options_auto_form_wrapper_switch">
        <input className='options_auto_form_wrapper_switch_checkbox' type="checkbox"/>
        <span className="options_auto_form_wrapper_switch_slider"></span>
      </label>
    </div>    
    </form>  
    </>
  )
}

export default Options