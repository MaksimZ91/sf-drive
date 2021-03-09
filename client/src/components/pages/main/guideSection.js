import React from 'react'



function Guide (){
  return (
    <>
    <section className="guide">
            <h2>Как арендовать автомобиль</h2>
            <div className="guide_wrapper">
                <div className="guide_wrapper_block">
                    <p>1</p>
                    <img className="guide_wrapper_block_img_mobile" src="./src/img/l1_mobile.svg"     alt="line"/>
                    <p>Выберите автомобиль</p>
                </div>
                <img className="guide_wrapper_img" src="./src/img/Line.svg"     alt="line"/>
                <img className="guide_wrapper_img_mobile" src="./src/img/line_mobile.svg"     alt="line"/>
                <div className="guide_wrapper_block">
                    <p>2</p>
                    <img className="guide_wrapper_block_img_mobile" src="./src/img/l2_mobile.svg"     alt="line"/>
                    <p>Забронируйте дату и время</p>
                </div>
                <img className="guide_wrapper_img" src="./src/img/Line.svg"     alt="line"/>
                <img className="guide_wrapper_img_mobile" src="./src/img/line_mobile.svg"     alt="line"/>
                <div className="guide_wrapper_block">
                    <p>3</p>
                    <img className="guide_wrapper_block_img_mobile" src="./src/img/l3_mobile.svg"     alt="line"/>
                    <p>Получите автомобиль</p>
                </div>           
        </div>
         </section>
    </>
  )
}

export default Guide