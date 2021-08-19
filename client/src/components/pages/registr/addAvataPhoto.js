import React, { useEffect, useRef, useState } from 'react'
import axios, { CancelToken } from 'axios'
import { useHttp } from '../../../hooks/http.hook'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux'
import { showAlert } from '../../../../redux/actions/actions';
import { deleteAvatarPhoto } from '../../../../redux/actions/userAction';



function AddAvatarPhoto (props){
    const { request } = useHttp()   
    const dispatch = useDispatch() 
    const [photoUrl, setPhotoUrl] = useState(null)
    const [procentUpload, setProcentUpload] = useState(0)   
    const [error, setError] = useState(false)
    const [ loading, setLoading ] = useState(false)  
    const cancelFileUpload = useRef(null)   
    const userAvatar = useSelector((state)=>{
        return { avatar:state.user.userAvatar, avatarName:state.user.avatarPhotoName }
    })
    const urlUpload ='http://localhost:5000/user/upload'
    const urlDelete = 'http://localhost:5000/user/delete-image/'


   

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


    const uploadPhoto = async () => { 
        setLoading(true)
        setError(false)    
        const formData = new FormData()
        formData.append( 'file', userAvatar.avatar)   
        const config ={       
            method:'POST', 
            onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                if (totalLength) {
                    let progress = Math.round((progressEvent.loaded * 100) / totalLength)                   
                    setProcentUpload(progress)
                }
            },
            cancelToken: new CancelToken( cancel => cancelFileUpload.current = cancel)
        } 

        await axios.post(urlUpload, formData, config)      
       .then(response => {           
        dispatch(props.avatarName(response.data))
        })
        .catch(function (e) {
            console.log(e)
            setError(true)
            dispatch(showAlert('Не удалось загрузить фото'))
        })
        setLoading(false)
    } 


     useEffect(()=>{
         if(userAvatar.avatar){
         let reader = new FileReader()
         reader.readAsDataURL(userAvatar.avatar)
         reader.onloadend = function () {
             setPhotoUrl(reader.result);
           }
           uploadPhoto()
        }
     },[userAvatar.avatar])

     const cancelUpload = () => {
        if (cancelFileUpload.current)
        dispatch(showAlert('Не удалось загрузить фото'))
        setError(true)       
        cancelFileUpload.current('User has canceled the file upload')
    }

    const onDeletePhoto = async () =>{
        dispatch(deleteAvatarPhoto(null))     
        await request(urlDelete + userAvatar.avatar.name,'DELETE')  
        setPhotoUrl(null) 
    }    



    return(
        <>
        <div className='add_avatar_avatarbox'
            onDrop={onDropHandler}
            onDragStart={onDragStartHandler}
            onDragLeave={onDragLeveHandler}
            onDragOver={onDragStartHandler}>
             <label>
             <img className={!photoUrl?'add_avatar_avatarbox_img':'add_avatar_avatarbox_img active'}src={photoUrl?photoUrl:'../src/img/cameraPhoto.svg'} alt='camera_image'/>
             <input type='file' hidden={true} onChange={handleFileInput}/>
             </label>           
                {(procentUpload<=100 && userAvatar.avatar)?<div className='add_avatar_avatarbox_uploader'></div>:''}
                {(procentUpload<=100 && userAvatar.avatar)?<div className='add_avatar_avatarbox_uploader_wrapper'>                                        
                        <CircularProgressbarWithChildren
                        value={procentUpload}
                        strokeWidth={5}
                        styles={buildStyles({                   
                            pathColor: "#FFFFFF",
                            trailColor: "transparent"
                            })}>  
                        {(!error&&loading)?<img src='../src/img/cancel_fetch.svg' onClick={()=>cancelUpload()}/>:''} 
                        {error?<img src='../src/img/upload_arrow.svg' onClick={uploadPhoto}/>:''}
                        {userAvatar.avatarName?<img src='../src/img/delete_avatar.svg' onClick={onDeletePhoto}/>:''}              
                        </CircularProgressbarWithChildren>                   
                </div>:''}
        </div>
        </>
    )
}

export default AddAvatarPhoto