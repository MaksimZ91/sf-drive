import React from 'react'
import { useDispatch } from 'react-redux'


function Newphoto (props){
    const dispatch = useDispatch()
    

    const onDropHandler = e => {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        files.forEach(foto => dispatch(props.addPhoto(foto)))        
     }

     const handleFileInput = e => {
        e.preventDefault()
        let files =[...e.target.files]
        files.forEach(foto => dispatch(props.addPhoto(foto)))
    }
     
     const onDragStartHandler = e => {
         e.preventDefault()
     }
     
     const onDragLeveHandler = e => {
         e.preventDefault()
     }
    return(
        <>
       <div className='add_photo_newphoto_addphoto' onDrop={onDropHandler} onDragStart={onDragStartHandler} onDragLeave={onDragLeveHandler} onDragOver={onDragStartHandler}>
            <div className='add_photo_newphoto_addphoto_wrapper'>
                <img src='../src/img/upload.svg'/>
                <span><input id="file-input" type='file'onChange={handleFileInput} multiple />
                    <label htmlFor="file-input">Добавить ещё файл</label>
                </span>
                
                <p>JPG или PNG, не более 30 мб</p>
            </div>        
        </div>
        </>
    )
}

export default Newphoto