import React from 'react'

function InfoAutoBlock (){
    return(
        <>
        <section className='infoAutoBlock'>
            <div className='infoAutoBlock_name'>
                <h2>Hyundai Solaris, 2018</h2>
                <div className='infoAutoBlock_name_wrapper'>
                    <div className='infoAutoBlock_name_wrapper_price'>
                        <p>1 800 ₽/сут.</p>
                        <p>обычная аренда</p>
                    </div>
                    <div className='infoAutoBlock_name_wrapper_price'>
                        <p>1 600 ₽/сут.</p>
                        <p>при аренде на 3 дня</p>
                    </div>
                    <div className='infoAutoBlock_name_wrapper_price'>
                        <p>1 400 ₽/сут.</p>
                        <p>при аренде более 5 дней</p>
                    </div>
                </div>
            </div>
            <div className='infoAutoBlock_user'>
                <div className='infoAutoBlock_user_wrapper'>
                    <img className='infoAutoBlock_user_wrapper_img' src='../src/img/person_owner.svg'/>
                    <p className='infoAutoBlock_user_wrapper_name'>Иван И.</p>
                    <p className='infoAutoBlock_user_wrapper_owner'>Владелец</p>
                    <p className='infoAutoBlock_user_wrapper_profile'><a>Посмотреть профиль</a></p>
                </div>
            </div>
            <div className='infoAutoBlock_specification'>
                <p>Характеристики</p>
                <div className='infoAutoBlock_specification_year'>
                    <p>Год выпуска</p>
                    <p>2018 год</p>
                </div>
                <div className='infoAutoBlock_specification_body'>
                    <p>Кузов</p>
                    <p>Седана</p>
                </div>
                <div className='infoAutoBlock_specification_motor'>
                    <p>Двигатель</p>
                    <p>1.6 л / 123 л.с. / бензин</p>
                </div>
                <div className='infoAutoBlock_specification_transsmisson'>
                    <p>Трансмиссия</p>
                    <p>Автоматическая</p>
                </div>
                <div className='infoAutoBlock_specification_privod'>
                    <p>Привод</p>
                    <p>Передний</p>
                </div>
                <div className='infoAutoBlock_specification_millage'>
                    <p>Пробег</p>
                    <p>125 000 км</p>
                </div>
            </div>           
            <div className='infoAutoBlock_options'>
            <p>Опции</p>
                <div className='infoAutoBlock_options_wrpapper' >
                    <div className='infoAutoBlock_options_wrpapper_isofix'>
                        <img src='../src/img/isofix.svg'/> 
                        <p>Крепления Isofix</p>
                    </div>
                    <div className='infoAutoBlock_options_wrpapper_srs'>
                        <img  src='../src/img/srs.svg'/>
                        <p>Подушки безопасности</p>
                    </div>
                    <div className='infoAutoBlock_options_wrpapper_heater'>
                        <img  src='../src/img/heater.svg'/>
                        <p>Автономный подогреватель</p>
                    </div>
                </div>
                <div className='infoAutoBlock_options_wrapper' >
                    <div className='infoAutoBlock_options_wrapper_aux'>
                        <img src='../src/img/auxx.svg'/>
                        <p>AUX-кабель</p>
                    </div>
                    <div className='infoAutoBlock_options_wrapper_bluetooth'>
                        <img src='../src/img/bluetooth.svg' />
                        <p>Поддержкаа Bluetooth</p>
                    </div>
                    <div className='infoAutoBlock_options_wrapper_cruis'>
                        <img src='../src/img/cruis.svg'/>
                        <p>Круиз-контроль</p>
                    </div>
                </div>
                <div className='infoAutoBlock_options_wrapper' >
                    <div className='infoAutoBlock_options_condition'>
                        <img src='../src/img/condi.svg' />
                        <p>Кондиционер</p>
                    </div>
                    <div className='infoAutoBlock_options_wrapper'>
                        <img src='../src/img/media.svg'  />
                        <p>Мультимедия</p>
                    </div>
                    <div className='infoAutoBlock_options_navigation'>
                        <img src='../src/img/navi.svg' />
                        <p>Навигация</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default InfoAutoBlock