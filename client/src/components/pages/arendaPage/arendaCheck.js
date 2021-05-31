import React from 'react'


function ArendaCheck (){
    return(
        <>
         <section className='arenda_check'>
             <p>Ваш чек</p>
             <div className='arenda_check_price'>
                 <div className='arenda_check_price_cost'>
                     <p>Стоимость аренды</p>
                     <p>4 800 ₽</p>
                 </div>
                 <div className='arenda_check_price_discount'>
                     <p>05.06.20 – 08.06.20</p>
                     <p>5 400 ₽</p>
                 </div>
             </div>
             <div className='arenda_check_options'>
                 <p>Доп. услуги</p>
                 <p>1 000 ₽</p>
             </div>
             <div className='arenda_check_commission'>
                 <p>Комиссия сервиса</p>
                 <p>1 000 ₽</p>
             </div>
             <div className='arenda_check_total'>
                 <p>К оплате</p>
                 <p>6 800 ₽</p>
             </div>
         </section>
        </>
    )
}
export default ArendaCheck