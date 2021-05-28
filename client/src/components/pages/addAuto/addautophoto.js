import React, { useState, useEffect } from 'react'
import Addphoto from './addphoto'
import Continuestep from './continuestep'
import Autophoto from './autophoto'
import Error from '../../error/error'
import { Redirect } from 'react-router'
import { useHttp } from '../../../hooks/http.hook'
import { useSelector, useDispatch } from 'react-redux'
import {  hideLoading, showLoading, addAutoPhotos, addAutoPhotoName, deletePhoto } from '../../../../redux/actions/actions';
import Backarrow from '../../backarrow/backArrow'


function Addautophoto (){ 
    const dispatch = useDispatch() 
    const [error, setError]=useState(null)
    const [data, setData]=useState(null) 
    const [valid, setValid]=useState(true)
    const {request} = useHttp()
    const addAutoPhoto = useSelector((state)=>{
      return state.newAuto.autoPhoto
  })
  const autoPhoto = 'autoPhoto'
  const urlDelete = 'http://localhost:5000/auto/delete-image/'
  const urlUpload='http://localhost:5000/auto/upload'
  const backlink = "/addauto/options"


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


const validation = (form) =>{
  if (form.length==0)return true
  return false
}

useEffect(()=>{
  setValid(validation(addAutoPhoto))
},[addAutoPhoto])

    return(
        <>
        <main>
        {error?<Error/>:''}
        <section className="add_photo">
        <Backarrow value={backlink}/>       
        <div className="add_photo_titel">
            <p >Шаг 3 из 4</p>
            <p>Фото автомобиля</p>
            <p>Чем больше качественных фотографий вы загрузите, тем выше шанс того, что выберут ваш автомобиль.</p> 
            {!addAutoPhoto.length==0?<Autophoto value={autoPhoto} photoName={addAutoPhotoName} deletePhoto={deletePhoto} url={{delete:urlDelete, upload:urlUpload}} addPhoto={addAutoPhotos}/>:<Addphoto value={addAutoPhotos}/>}
            <Continuestep nextStep={authorRequest} validation={valid}/> 
            {!error&&data?<Redirect to='/addauto/documentphoto'/>:''}            
        </div>        
        </section>  
        </main>
        </>
        
    )
}

export default Addautophoto