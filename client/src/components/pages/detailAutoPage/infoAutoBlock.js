import React from 'react'
import { useSelector } from 'react-redux'

function InfoAutoBlock (){
    const auto = useSelector((state)=>{
        return state.auto.currentAuto
    })
    return(
        <>
        <section className='infoAutoBlock'>
            <div className='infoAutoBlock_name'>
                <h2>{auto.mark} {auto.model}, {auto.year}</h2>
                <div className='infoAutoBlock_name_wrapper'>
                    <div className='infoAutoBlock_name_wrapper_price'>
                        <p>{auto.price} ₽/сут.</p>
                        <p>обычная аренда</p>
                    </div>
                    <div className='infoAutoBlock_name_wrapper_price'>
                        <p>{auto.priceThreeDays} ₽/сут.</p>
                        <p>при аренде на 3 дня</p>
                    </div>
                    <div className='infoAutoBlock_name_wrapper_price'>
                        <p>{auto.priceFiveDays} ₽/сут.</p>
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
                <div className='infoAutoBlock_specification_elem'>
                    <p>Год выпуска</p>
                    <p>{auto.year} год</p>
                </div>
                <div className='infoAutoBlock_specification_elem'>
                    <p>Кузов</p>
                    <p>Седана</p>
                </div>
                <div className='infoAutoBlock_specification_elem'>
                    <p>Двигатель</p>
                    <p>{auto.volume} л / {auto.power} л.с. / бензин</p>
                </div>
                <div className='infoAutoBlock_specification_elem'>
                    <p>Трансмиссия</p>
                    <p>{auto.transmission}</p>
                </div>
                <div className='infoAutoBlock_specification_elem'>
                    <p>Привод</p>
                    <p>{auto.privod}</p>
                </div>
                <div className='infoAutoBlock_specification_elem'>
                    <p>Пробег</p>
                    <p>{auto.millege} км</p>
                </div>
            </div>           
            <div className='infoAutoBlock_options'>
            <p>Опции</p>
            <div className='infoAutoBlock_options_block'>
                <div className='infoAutoBlock_options_block_wrapper' >
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img src='../src/img/isofix.svg'/> 
                        <p>Крепления Isofix</p>
                    </div>
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img  src='../src/img/srs.svg'/>
                        <p>Подушки безопасности</p>
                    </div>
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img  src='../src/img/heater.svg'/>
                        <p>Автономный подогреватель</p>
                    </div>
                </div>
                <div className='infoAutoBlock_options_block_wrapper' >
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img src='../src/img/auxx.svg'/>
                        <p>AUX-кабель</p>
                    </div>
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img src='../src/img/bluetooth.svg' />
                        <p>Поддержкаа Bluetooth</p>
                    </div>
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img src='../src/img/cruiz.svg'/>
                        <p>Круиз-контроль</p>
                    </div>
                </div>
                <div className='infoAutoBlock_options_block_wrapper' >
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img src='../src/img/condi.svg' />
                        <p>Кондиционер</p>
                    </div>
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img src='../src/img/media.svg'  />
                        <p>Мультимедия</p>
                    </div>
                    <div className='infoAutoBlock_options_block_wrapper_elem'>
                        <img src='../src/img/navi.svg' />
                        <p>Навигация</p>
                    </div>
                </div>
                </div> 
            </div>
        </section>
        </>
    )
}


export default InfoAutoBlock