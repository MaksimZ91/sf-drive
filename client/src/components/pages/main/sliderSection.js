import React from "react"



function Slider (){
  return (
    <>
      <section className="slider">
        <h2>Отзывы клиентов</h2>
        <div className="slider_wrapper">
            <img className="slider_wrapper_left_arrow" src="./src/img/left_arrow.svg"     alt="left_arrow"/>
            <div className="slider_wrapper_content">
                <div className="slider_wrapper_content_person" >
                    <img className="slider_wrapper_content_person_foto" src="./src/img/person_foto.svg"     alt="person_foto"/>
                    <div className="slider_wrapper_content_person_wrapper">
                    <p className="slider_wrapper_content_person_wrapper_name">Иван Иванов</p>
                    <p className="slider_wrapper_content_person_wrapper_city">Москва</p>
                    </div>
                </div>
                <p className="slider_wrapper_answer">Классный сервис! В путешествиях по стране часто берём машину
                    в аренду. Здесь нету ограничений по зоне перемещения и поэтому
                    есть возможность съездить в интересные туристические места,
                    которые отдалены от города.</p>                    
            </div>
            <img className="slider_wrapper_right_arrow" src="./src/img/right_arrow.svg"     alt="right_arrow"/>
        </div>
        <div className="slider_dots">
            <img className="slider_dots_dot active" src="./src/img/dotsactive.svg"     alt="dot"/>
            <img className="slider_dots_dot" src="./src/img/dots.svg"     alt="dot"/>
            <img className="slider_dots_dot" src="./src/img/dots.svg"     alt="dot"/>
            <img className="slider_dots_dot" src="./src/img/dots.svg"     alt="dot"/>
        </div>
        </section>
    </>
  )
}

export default Slider