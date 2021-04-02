import React from 'react'


function ComentBlock () {
    return(
        <>
        <section className='comentblock'>
        <p>Отзывы</p>
        <div className='comrntblock_reiting'>
            <img src='../src/img/star.svg'/>
            <span>4,5 (4 отзыва)</span>
        </div>
        <div className="comentblock_wrapper_content">
                <div className="comentblock_wrapper_content_person" >
                    <img className="comentblock_wrapper_content_person_foto" src='../src/img/comet_person.svg'    alt="person_foto"/>
                    <div className="comentblock_wrapper_content_person_wrapper">
                    <p className="comentblock_wrapper_content_person_wrapper_name">Владимир И.</p>
                    <p className="comentblock_wrapper_content_person_wrapper_date">Март 2020</p>
                    </div>
                </div>
                <p className="comentblock_wrapper_answer">Отличный автомобиль за эти деньги. Динамики для города достаточно, расход также небольшой, не зря
                Солярис берут таксисты. Владелец общительный,
                показал и рассказал все об автомобиле. Договорились, что передадим ему машину в другом районе города! Рекомендую!</p>                    
            </div>
            </section>
        </>
    )
}


export default ComentBlock