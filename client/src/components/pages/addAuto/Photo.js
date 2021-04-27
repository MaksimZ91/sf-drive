import React, { useEffect, useRef, useState } from 'react'
import axios, { CancelToken } from 'axios'
import { useHttp } from '../../../hooks/http.hook'
import { CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import { useSelector, useDispatch } from 'react-redux'
import {  hideLoading, showLoading } from '../../../../redux/actions/actions';
const TOKENS_KYES='tokens'


function Photo (props){  
    
    const {request} = useHttp()   
    const dispath = useDispatch()    
    const [photoUrl, setPhotoUrl] = useState(null)    
    const [procentUpload, setProcentUpload]= useState(0)   
    const [error, setError]=useState(false)
    const cancelFileUpload = useRef(null)
    const loading = useSelector((state)=>{
        return state.app.loading
    })
    const autoID = useSelector((state)=>{
        return state.newAuto.newAutoId
    })

    const onDeletePhoto = async () =>{
        dispath(props.deletePhoto(props.index))     
        await request(props.url.delete + props.value.name,'DELETE')   
    }

    const uploadPhoto = async () => { 
        dispath(showLoading())  
        setError(false)    
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
            cancelToken: new CancelToken( cancel => cancelFileUpload.current = cancel)
        } 

        await axios.post(props.url.upload, formData, config)
       .then(response => {           
            dispath(props.photoName(response.data))
        })
        .catch(function (e) {setError(e)})
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

    const cancelUpload = () => {
        if (cancelFileUpload.current)
            cancelFileUpload.current('User has canceled the file upload')
    }

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
                        {(!error&&loading)?<img src='../src/img/cancel_fetch.svg' onClick={()=>cancelUpload()}/>:''} 
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