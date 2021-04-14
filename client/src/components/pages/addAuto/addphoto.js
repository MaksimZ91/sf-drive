import React from 'react'

function Addphoto (){
    return(
        <>
        <div className="add_photo_drop">
            <div className='add_photo_drop_wrapper'>
                <img src='../src/img/upload.svg'/>
                <span>Перетащите или <input id="file-input" type='file'/>
                    <label htmlFor="file-input">выберите файл</label>
                </span>
                <p>JPG или PNG, не более 30 мб</p>
            </div>        
        </div>
        </>
    )
}

export default Addphoto