import React from 'react'
import Photo from '../../photo/Photo'
import Newphoto from '../../photo/newPhoto'
import { useSelector} from 'react-redux'


function AddUserDocument (props){    
   
    const addAutoPhoto = useSelector((state)=>{
        return state.user[props.value]
    })
    
    return(
        <>
        <div className='add_photo_newphoto'>
            {addAutoPhoto.map((e, index) => <Photo value={e} index={index} photoName={props.photoName} url={props.url} deletePhoto={props.deletePhoto} key={e.lastModified+index}/>)}
           <Newphoto addPhoto={props.addPhoto}/>            
        </div>

        </>
    )
}

export default AddUserDocument