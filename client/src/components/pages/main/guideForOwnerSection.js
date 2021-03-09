import React from 'react'



function Guideforowner (){
  return (
    <>
    <section className="guide_for_owner">
        <h2>У вас есть автомобиль?</h2>
        <p>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</p>
        <div className="guide_for_owner_wrapper">
            <div className="guide_for_owner_wrapper_block">
                <img className="guide_for_owner_wrapper_block_img" src="./src/img/label.svg"     alt="label"/>
                <img className="guide_for_owner_wrapper_block_img_mobile" src="./src/img/label_mobile.svg"  alt="label"/>
                <p>Вы сами указываете цену</p>
            </div>
            <img className="guide_for_owner_wrapper_img" src="./src/img/LineOwner.svg"     alt="line"/>
            <img className="guide_for_owner_wrapper_img_mobile" src="./src/img/line_mobile.svg"     alt="line"/>
            <div className="guide_for_owner_wrapper_block">
                <img className="guide_for_owner_wrapper_block_img" src="./src/img/dollar.svg"     alt="dollar"/>
                <img className="guide_for_owner_wrapper_block_img_mobile" src="./src/img/dollar_mobile.svg"     alt="dollar"/>
                <p>Мы страхуем автомобили</p>
            </div>
            <img className="guide_for_owner_wrapper_img" src="./src/img/LineOwner.svg"     alt="line"/>
            <img className="guide_for_owner_wrapper_img_mobile" src="./src/img/line_mobile.svg"     alt="line"/>
            <div className="guide_for_owner_wrapper_block">
                <img className="guide_for_owner_wrapper_block_img" src="./src/img/proc.svg"     alt="procent"/>
                <img className="guide_for_owner_wrapper_block_img_mobile" src="./src/img/procent_mobile.svg"     alt="procent"/>
                <p>Наша комиссия всего 3%</p>
            </div>
            <img className="guide_for_owner_wrapper_img" src="./src/img/LineOwner.svg"     alt="line"/>
            <img className="guide_for_owner_wrapper_img_mobile" src="./src/img/line_mobile.svg"     alt="line"/>
            <div className="guide_for_owner_wrapper_block">
                <img className="guide_for_owner_wrapper_block_img" src="./src/img/money.svg"     alt="money"/>
                <img className="guide_for_owner_wrapper_block_img_mobile" src="./src/img/money_mobile.svg"     alt="money"/>
                <p>Выплаты каждую неделю</p>
            </div>
         </div>
        </section>
    </>
  )
}

export default Guideforowner