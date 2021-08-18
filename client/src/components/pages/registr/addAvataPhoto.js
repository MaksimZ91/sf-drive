import React, { useEffect, useRef, useState } from 'react'
import axios, { CancelToken } from 'axios'
import { useHttp } from '../../../hooks/http.hook'
import { CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux'
import {  hideLoading, showLoading } from '../../../../redux/actions/actions';
const TOKENS_KYES='tokens'


function AddAvatarPhoto (props){
    const {request} = useHttp()   
    const dispath = useDispatch() 
    const [photoUrl, setPhotoUrl] = useState(null)
    const [procentUpload, setProcentUpload]= useState(0)   
    const [error, setError]=useState(false)
    const cancelFileUpload = useRef(null)
    const loading = useSelector((state)=>{
        return state.app.loading
    })    
    const userAvatar = useSelector((state)=>{
        return state.user.userAvatar
    })
    const urlUpload ='http://localhost:5000/user/upload'


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


    const uploadPhoto = async () => { 
        dispath(showLoading())  
        setError(false)    
        const formData = new FormData()
        formData.append( 'file', userAvatar)   
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
        console.log('1')
       .then(response => {           
            dispath(props.photoName(response.data))
        })
        .catch(function (e) {setError(e)})
        dispath(hideLoading())
    } 


     useEffect(()=>{
         if(userAvatar){
         let reader = new FileReader()
         reader.readAsDataURL(userAvatar)
         reader.onloadend = function () {
             setPhotoUrl(reader.result);
           }
           uploadPhoto()
        }
     },[userAvatar])

     const cancelUpload = () => {
        if (cancelFileUpload.current)
            cancelFileUpload.current('User has canceled the file upload')
    }
     



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
                {procentUpload<100?<div className='uploader'></div>:''}
                {procentUpload<100?<div className='uploader_wrapper'>                                        
                        <CircularProgressbarWithChildren
                        value={procentUpload}
                        strokeWidth={5}
                        styles={buildStyles({                   
                            pathColor: "#FFFFFF",
                            trailColor: "transparent"
                            })}>  
                        {(!error&&loading)?<img src='../src/img/cancel_fetch.svg' onClick={()=>cancelUpload()}/>:''} 
                        {error?<img src='../src/img/upload_arrow.svg' onClick={uploadPhoto}/>:''}              
                        </CircularProgressbarWithChildren>                   
                </div>:''}
        </div>
        </>
    )
}

export default AddAvatarPhoto