import React from 'react'

function Auto (){
    return(
       <div className='myAuto_auto'>
           <img className='myAuto_img' src='../src/img/hend_auto.svg'/>
           <div className='myAuto_auto_wrapper'>
               <div className='myAuto_auto_wrapper_status'>
                   <img src='../src/img/golden_star.svg'/>
                   <span>4,5 (12)</span>
               </div>
               <p className='myAuto_auto_wrapper_name'>Hyundai Solaris, 2018</p>
               <div className='myAuto_auto_wrapper_tech'>
                    <div className='myAuto_auto_wrapper_tech_motor'>
                        <img src='../src/img/motor.svg'/>
                        <p>1.6 л / 122 л.с. / Бензин</p>
                    </div>
                    <div  className='myAuto_auto_wrapper_tech_kpp'>
                        <img src='../src/img/kpp.svg'/>
                        <p>Автомат /  Передний привод</p>
                    </div>
               </div>
               <p className='myAuto_auto_wrapper_price'>1 800 ₽ в сутки</p>
           </div>

       </div>
    )
}

export default Auto