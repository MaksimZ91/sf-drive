import React from 'react'
import Photo from './Photo'
import Newphoto from './newPhoto'
import { useSelector, useDispatch } from 'react-redux'
import { deletePhoto } from '../../../../redux/actions/actions';


function Autophoto (){
    const dispath = useDispatch()
    const addAutoPhoto = useSelector((state)=>{
        return state.newAuto.autoPhoto
    })

    const deletePhotos = (index) =>{
        dispath(deletePhoto(addAutoPhoto, index))
    }

    
    return(
        <>
        <div className='add_photo_newphoto'>
            {addAutoPhoto.map((e, index) => <Photo value={e} index={index} onDeletePhoto={deletePhotos} key={e.lastModified+index}/>)}
           <Newphoto/>            
        </div>

        </>
    )
}

export default Autophoto