import React, { useState } from 'react'
import Addphoto from './addphoto'
import Continuestep from './continuestep'
import Autophoto from './autophoto'
import Error from './error'
import { Redirect } from 'react-router'
import { addDocumetPhoto, hideLoading, showLoading, addDocumetPhotoName, deletePhotoDocument } from '../../../../redux/actions/actions'
import { useHttp } from '../../../hooks/http.hook'
import { useDispatch, useSelector } from 'react-redux'


function AddDocumentPhoto (){
    const dispatch = useDispatch()
    const [error, setError]=useState(null)
    const [data, setData]=useState(null) 
    const {request} = useHttp()
    const addAutoPhotoDocument = useSelector((state)=>{
        return state.newAuto.docunemtPhoto
    })
    const docunemtPhoto = 'docunemtPhoto'
    const form = useSelector((state)=>{
        return {photoName:state.newAuto.autoPhotoName, ...state.newAuto.newAutoId}
      })
    
    const authorRequest = async () => { 
        try { 
          dispatch(showLoading())
            const result = await request('http://localhost:5000/auto/photoname','POST', form)
            setData(result) 
            dispatch(hideLoading())     
        } catch (e) {
          setError(e)
        }     
    } 


    return(
        <>
        <main>
        {error?<Error/>:''}
        <section className="add_photo">
        <div className="add_photo_titel">
            <p>Шаг 4 из 4</p>
            <p>Фото документов</p>
            <p>СТС или ПТС автомобиля, полис ОСАГО, полис КАСКО (если есть)</p>            
            {!addAutoPhotoDocument.length==0?<Autophoto value={docunemtPhoto} photoName={addDocumetPhotoName} deletePhoto={deletePhotoDocument} addPhoto={addDocumetPhoto}/>:<Addphoto value={addDocumetPhoto}/>}
            <Continuestep nextStep={authorRequest}/>            
        </div>        
        </section>  
        </main>
        </>
        
    )
}

export default AddDocumentPhoto 