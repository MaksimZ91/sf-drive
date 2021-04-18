import React from 'react'
import Photo from './Photo'
import Newphoto from './newPhoto'
import { useSelector } from 'react-redux'


function Autophoto (){
    const addAutoPhoto = useSelector((state)=>{
        return state.newAuto.autoPhoto
    })

    console.log(addAutoPhoto)
    return(
        <>
        <div className='add_photo_newphoto'>
            {addAutoPhoto.map(e => <Photo value={e} key={e.lastModified}/>)}
           <Newphoto/>            
        </div>

        </>
    )
}

export default Autophoto