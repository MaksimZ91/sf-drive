import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function AddAvatarPhoto (props){
    const [photoUrl, setPhotoUrl] = useState(null)
    
    const userAvatar = useSelector((state)=>{
        return state.user.userAvatar
    })


    const dispatch = useDispatch()

    const onDropHandler = e =>{
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        files.forEach(foto => dispatch(props.value(foto)))
     }

     const onDragStartHandler = e =>{
         e.preventDefault()
     }
     
     const onDragLeveHandler = e =>{
         e.preventDefault()
     }

     useEffect(()=>{
         if(userAvatar){
         let reader = new FileReader()
         reader.readAsDataURL(userAvatar)
         reader.onloadend = function () {
             setPhotoUrl(reader.result);
           }
        }
     },[userAvatar])
     



    return(
        <>
        <div onDrop={onDropHandler}
            onDragStart={onDragStartHandler}
            onDragLeave={onDragLeveHandler}
            onDragOver={onDragStartHandler}
         >
            <img
            src={photoUrl?photoUrl:'../src/img/cameraPhoto.svg'}
            alt='camera_image'
            />
        </div>
        </>
    )
}

export default AddAvatarPhoto