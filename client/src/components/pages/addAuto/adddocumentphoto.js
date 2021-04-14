import React from 'react'
import Addphoto from './addphoto'
import Continuestep from './continuestep'
import Autophoto from './autophoto'


function AddDocumentPhoto (){
    return(
        <>
        <main>
        <section className="add_photo">
        <div className="add_photo_titel">
            <p>Шаг 4 из 4</p>
            <p>Фото документов</p>
            <p>СТС или ПТС автомобиля, полис ОСАГО, полис КАСКО (если есть)</p>            
            <Addphoto/>
            <Continuestep/>            
        </div>        
        </section>  
        </main>
        </>
        
    )
}

export default AddDocumentPhoto 