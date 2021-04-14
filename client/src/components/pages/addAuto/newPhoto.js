import React from 'react'


function Newphoto (){
    return(
        <>
       <div className='add_photo_newphoto_addphoto'>
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