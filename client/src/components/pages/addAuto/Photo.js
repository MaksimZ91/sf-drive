import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import { useSelector, useDispatch } from 'react-redux'
import { fetchHttp } from '../../../js/fetch'
const TOKENS_KYES='tokens'


function Photo (props){
    const dispatch = useDispatch()
    const [photoUrl, setPhotoUrl] = useState(null)
    const [procentUpload, setProcentUpload]= useState(0)

 

    useEffect (()=>{
        let reader  = new FileReader();
        reader.readAsDataURL(props.value)
        reader.onloadend = function () {
            setPhotoUrl(reader.result);
          }
    },[])

    
    useEffect ( async ()=>{
        let tokens = JSON.parse(localStorage.getItem(TOKENS_KYES))
         let access = tokens.accessToken  
        const formData = new FormData()
        formData.append( 'file', props.value)      
        const response = await axios.post('http://localhost:5000/auto/upload', formData, {
             method:'POST',              
             headers:{ Authorization: `Bearer ${access}`},
             onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                console.log('total', totalLength)
                if (totalLength) {
                    let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                    console.log(progress)
                    setProcentUpload(progress)
                }
            }
             })  
         
    },[])

    return(
        <>
        <div className='add_photo_newphoto_currentphoto'>
            <div className='add_photo_newphoto_currentphoto_wrapper'>
                <img src={photoUrl}/>
                <div className='uploader'>                
                </div>
                <div className='uploader_wrapper'>                                        
                        <CircularProgressbarWithChildren
                        value={procentUpload}
                        strokeWidth={5}
                        styles={buildStyles({                   
                            pathColor: "#FFFFFF",
                            trailColor: "transparent"
                            })}>  
                        <img src='../src/img/upload_arrow.svg'/>              
                        </CircularProgressbarWithChildren>                   
                </div>

            </div>
            <div className='add_photo_newphoto_currentphoto_text'>
                <div className='add_photo_newphoto_currentphoto_text_wrapper'>
                    <p>{props.value.name}</p>
                    <p>2 Mb, JPG</p>
                </div>
                <img src='../src/img/trash.svg'/>
            </div>
        </div>
        
        </>
    )
}

export default Photo