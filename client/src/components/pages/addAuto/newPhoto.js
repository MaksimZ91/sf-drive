import React from 'react'


function Newphoto (){

    const onDropHandler = e =>{
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
     }
     
     const onDragStartHandler = e =>{
         e.preventDefault()
     }
     
     const onDragLeveHandler = e =>{
         e.preventDefault()
     }
    return(
        <>
       <div className='add_photo_newphoto_addphoto' onDrop={onDropHandler} onDragStart={onDragStartHandler} onDragLeave={onDragLeveHandler} onDragOver={onDragStartHandler}>
            <div className='add_photo_newphoto_addphoto_wrapper'>
                <img src='../src/img/upload.svg'/>
                <span><input id="file-input" type='file'/>
                    <label htmlFor="file-input">Добавить ещё файл</label>
                </span>
                
                <p>JPG или PNG, не более 30 мб</p>
            </div>        
        </div>
        </>
    )
}

export default Newphoto