import React from 'react'
import Addphoto from './addphoto'
import Continuestep from './continuestep'
import Autophoto from './autophoto'
import { useSelector } from 'react-redux'


function Addautophoto (){    
    const addAutoPhoto = useSelector((state)=>{
      return state.newAuto.autoPhoto
  })
   


    
    return(
        <>
        <main>
        <section className="add_photo">
        <div className="add_photo_titel">
            <p>Шаг 3 из 4</p>
            <p>Фото автомобиля</p>
            <p>Чем больше качественных фотографий вы загрузите, тем выше шанс того, что выберут ваш автомобиль.</p> 
            {!addAutoPhoto.length==0?<Autophoto/>:<Addphoto/>}
            <Continuestep/>            
        </div>        
        </section>  
        </main>
        </>
        
    )
}

export default Addautophoto