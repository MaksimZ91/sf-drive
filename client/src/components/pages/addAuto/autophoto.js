import React from 'react'
import Photo from './Photo'
import Newphoto from './newPhoto'
import { useSelector, useDispatch } from 'react-redux'


function Autophoto (props){

    
    const dispath = useDispatch()
    const addAutoPhoto = useSelector((state)=>{
        return state.newAuto[props.value]
    })

    const deletePhotos = (index) =>{
        dispath(deletePhoto(addAutoPhoto, index))
    }

    
    return(
        <>
        <div className='add_photo_newphoto'>
            {addAutoPhoto.map((e, index) => <Photo value={e} index={index} photoName={props.photoName} deletePhoto={props.deletePhoto} key={e.lastModified+index}/>)}
           <Newphoto addPhoto={props.addPhoto}/>            
        </div>

        </>
    )
}

export default Autophoto