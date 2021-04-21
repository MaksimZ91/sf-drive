import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import { useSelector, useDispatch } from 'react-redux'
import {  hideLoading, showLoading, deletePhoto } from '../../../../redux/actions/actions';
const TOKENS_KYES='tokens'


function Photo (props){ 
    const CancelToken = axios.CancelToken;    
    const dispath = useDispatch()  
    const [photoUrl, setPhotoUrl] = useState(null)
    const [procentUpload, setProcentUpload]= useState(0)
    const [source, setSource]=useState(CancelToken.source())
    const [error, setError]=useState(false)
    const loading = useSelector((state)=>{
        return state.app.loading
    })

    console.log(error)
  


    const onDeletePhoto = () =>{
        dispath(deletePhoto(props.index))
    }

    const onAbortFetch = () =>{
        setError(true)
        source.cancel('Operation canceled by the user.')
    }

   

    const uploadPhoto = async () => {
        dispath(showLoading())
        const formData = new FormData()
        formData.append( 'file', props.value) 
        let tokens = JSON.parse(localStorage.getItem(TOKENS_KYES))
        let access = tokens.accessToken  
        const config ={       
            method:'POST',              
            headers:{ Authorization: `Bearer ${access}`},            
            onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                if (totalLength) {
                    let progress = Math.round((progressEvent.loaded * 100) / totalLength)                   
                    setProcentUpload(progress)
                }
            },
            cancelToken: source.token 
        }          
        const response = await axios.post('http://localhost:5000/auto/upload', formData, config)
        const data = await response.json()
        if (!response.ok){
            setError(data.message)
        }
        dispath(hideLoading())
    } 

    useEffect (() => {
        let reader  = new FileReader();
        reader.readAsDataURL(props.value)
        reader.onloadend = function () {
            setPhotoUrl(reader.result);
          }
          uploadPhoto() 
    },[])

    return(
        <>
        <div className='add_photo_newphoto_currentphoto'>
            <div className='add_photo_newphoto_currentphoto_wrapper'>
                <img src={photoUrl}/>
                {procentUpload<100?<div className='uploader'></div>:''}
                {procentUpload<100?<div className='uploader_wrapper'>                                        
                        <CircularProgressbarWithChildren
                        value={procentUpload}
                        strokeWidth={5}
                        styles={buildStyles({                   
                            pathColor: "#FFFFFF",
                            trailColor: "transparent"
                            })}>  
                        {(!error&&loading)?<img src='../src/img/cancel_fetch.svg' onClick={onAbortFetch}/>:''} 
                        {error?<img src='../src/img/upload_arrow.svg' onClick={uploadPhoto}/>:''}              
                        </CircularProgressbarWithChildren>                   
                </div>:''}

            </div>
            <div className='add_photo_newphoto_currentphoto_text'>
                <div className='add_photo_newphoto_currentphoto_text_wrapper'>
                    <p>{props.value.name.split(".")[0]}</p>
                    {!error?<p>2 Mb, JPG</p>:<p>Не удалось загрузить файл</p>}
                </div>
                <img src='../src/img/trash.svg' onClick={onDeletePhoto}/>
            </div>
        </div>
        
        </>
    )
}

export default Photo