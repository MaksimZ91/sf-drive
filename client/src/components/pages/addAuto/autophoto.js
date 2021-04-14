import React from 'react'
import Photo from './Photo'
import Newphoto from './newPhoto'


function Autophoto (){
    return(
        <>
        <div className='add_photo_newphoto'>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Newphoto/>            
        </div>

        </>
    )
}

export default Autophoto