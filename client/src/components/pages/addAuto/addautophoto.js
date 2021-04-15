import React from 'react'
import Addphoto from './addphoto'
import Continuestep from './continuestep'
import Autophoto from './autophoto'


function Addautophoto (){
    return(
        <>
        <main>
        <section className="add_photo">
        <div className="add_photo_titel">
            <p>Шаг 3 из 4</p>
            <p>Фото автомобиля</p>
            <p>Чем больше качественных фотографий вы загрузите, тем выше шанс того, что выберут ваш автомобиль.</p>            
            <Autophoto/>
            <Continuestep/>            
        </div>        
        </section>  
        </main>
        </>
        
    )
}

export default Addautophoto