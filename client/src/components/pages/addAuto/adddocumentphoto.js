import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
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
    const [valid, setValid]=useState(true)
    const {request} = useHttp()
    const addAutoPhotoDocument = useSelector((state)=>{
        return state.newAuto.docunemtPhoto
    })
    const docunemtPhoto = 'docunemtPhoto'
    const urlDelete = 'http://localhost:5000/auto/delete-image/document/'
    const urlUpload='http://localhost:5000/auto/upload/document'
    const form = useSelector((state)=>{
        return {photoName:state.newAuto.documnetPhotoName, ...state.newAuto.newAutoId}
      })

      let history = useHistory();

      function handleClick() {
        history.push("/addauto/photo");
      }
    
    const authorRequest = async () => { 
        try { 
          dispatch(showLoading())
            const result = await request('http://localhost:5000/auto/photoname/document','POST', form)
            setData(result) 
            dispatch(hideLoading())     
        } catch (e) {
          setError(e)
        }     
    } 

    const validation = (form) =>{
      if (form.length==0)return true
      return false
    }
    
    useEffect(()=>{
      setValid(validation(addAutoPhotoDocument))
    },[addAutoPhotoDocument])


    return(
        <>
        <main>
        {error?<Error/>:''}
        <section className="add_photo">
        <div className='back'  onClick={handleClick}>      
          <img className='back_arrow' src='../src/img/back_arrow.svg'/>
          <span className='back_text'>Назад</span>             
        </div> 
        <div className="add_photo_titel">
            <p>Шаг 4 из 4</p>
            <p>Фото документов</p>
            <p>СТС или ПТС автомобиля, полис ОСАГО, полис КАСКО (если есть)</p>            
            {!addAutoPhotoDocument.length==0?<Autophoto value={docunemtPhoto} photoName={addDocumetPhotoName} url={{delete:urlDelete, upload:urlUpload}} deletePhoto={deletePhotoDocument} addPhoto={addDocumetPhoto}/>:<Addphoto value={addDocumetPhoto}/>}
            <Continuestep nextStep={authorRequest} validation={valid}/>
            {!error&&data?<Redirect to='/confirm'/>:''}            
        </div>        
        </section>  
        </main>
        </>
        
    )
}

export default AddDocumentPhoto 