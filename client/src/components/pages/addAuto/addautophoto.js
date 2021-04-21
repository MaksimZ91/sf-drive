import React from 'react'
import Addphoto from './addphoto'
import Continuestep from './continuestep'
import Autophoto from './autophoto'
import { useSelector } from 'react-redux'
import {useHttp} from '../../../hooks/http.hook'

function Addautophoto (){  
    const {request} = useHttp()  
    const addAutoPhoto = useSelector((state)=>{
      return state.newAuto.autoPhoto
  })
   
  const authorRequest = async () => {   
    try {         
         
        const result = await request('http://localhost:5000/auto/delet-image/U_pv129bwMw.jpg','DELETE')          
    } catch (e) {
      setError(e)
    }     
} 


    
    return(
        <>
        <main>
        <section className="add_photo">
        <div className="add_photo_titel">
            <p onClick={authorRequest}>Шаг 3 из 4</p>
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