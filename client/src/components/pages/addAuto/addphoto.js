import React from 'react'
import { useDispatch } from 'react-redux'


function Addphoto (props){
    
const dispatch = useDispatch()  

const onDropHandler = e =>{
   e.preventDefault()
   let files = [...e.dataTransfer.files]
   files.forEach(foto => dispatch(props.value(foto)))
}

const handleFileInput = e =>{
    e.preventDefault()
    let files =[...e.target.files]
    files.forEach(foto => dispatch(props.value(foto)))
}

const onDragStartHandler = e =>{
    e.preventDefault()
}

const onDragLeveHandler = e =>{
    e.preventDefault()
}

    return(
        <>
        <div className="add_photo_drop" onDrop={onDropHandler} onDragStart={onDragStartHandler} multiple onDragLeave={onDragLeveHandler} onDragOver={onDragStartHandler}>
            <div className='add_photo_drop_wrapper' >
                <img src='../src/img/upload.svg'/>
                <span>Перетащите или <input id="file-input" type='file' onChange={handleFileInput} multiple/>
                    <label htmlFor="file-input">выберите файл</label>
                </span>
                <p>JPG или PNG, не более 30 мб</p>
            </div>        
        </div>
        </>
    )
}

export default Addphoto