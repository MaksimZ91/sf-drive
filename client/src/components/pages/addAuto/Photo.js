import React from 'react'
import Loader from './loader'


function Photo (){
    return(
        <>
        <div className='add_photo_newphoto_currentphoto'>
            <div className='add_photo_newphoto_currentphoto_wrapper'>
                <img/>
                <Loader/>
            </div>
            <div className='add_photo_newphoto_currentphoto_text'>
                <div className='add_photo_newphoto_currentphoto_text_wrapper'>
                    <p>IMG-20200601</p>
                    <p>2 Mb, JPG</p>
                </div>
                <img src='../src/img/trash.svg'/>
            </div>
        </div>
        
        </>
    )
}

export default Photo