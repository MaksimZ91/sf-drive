import React, { useState, useEffect } from 'react'
import AddUserDocument from './addUserDocument'
import Continuestep from '../../continueStep/continuestep'
import Addphoto from '../../photo/addphoto'
import Error from '../../error/error'
import { Redirect } from 'react-router'
import { hideLoading, showLoading } from '../../../../redux/actions/actions'
import { deleteUserPhotoDocument, addUserDocumetPhotoName, addUserDocumetPhoto } from '../../../../redux/actions/userAction'
import { useHttp } from '../../../hooks/http.hook'
import { useDispatch, useSelector } from 'react-redux'
import Backarrow from '../../backarrow/backArrow'




function UserDocumentPhoto (){
  const dispatch = useDispatch()
    const [error, setError]=useState(null)
    const [data, setData]=useState(null) 
    const [valid, setValid]=useState(true)
    const {request} = useHttp()
    const userDocumentPhoto = useSelector((state)=>{
        return state.user.userDocumentPhoto
    })
    const docunemtPhoto = 'userDocumentPhoto'
    const urlDelete = 'http://localhost:5000/user/delete-image/document/'
    const urlUpload='http://localhost:5000/user/upload/document'
    const backlink = "/rgistr/secondstep"
    const backName = 'add_photo_back'
    const continueTitel ='Продолжить'
    const nameClass = "new_auto_continue"
    const form = useSelector((state)=>{
        return {photoName:state.user.userDocumentPhotoName, userID:state.user.newUserID}
      })

    
    const authorRequest = async () => { 
        try { 
          dispatch(showLoading())
            const result = await request('http://localhost:5000/user/photoname/document','POST', form)
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
      setValid(validation(userDocumentPhoto))
    },[userDocumentPhoto])



  return(
    <>
       <main>
        {error?<Error/>:''}
        <section className="add_photo">
        <Backarrow value={backlink} name={backName}/>       
        <div className="add_photo_titel">
            <p>Шаг 3 из 3</p>
            <p>Загрузите документы</p>
            <p>Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон</p>            
            {!userDocumentPhoto.length==0?<AddUserDocument value={docunemtPhoto} photoName={addUserDocumetPhotoName} url={{delete:urlDelete, upload:urlUpload}} deletePhoto={deleteUserPhotoDocument} addPhoto={addUserDocumetPhoto}/>:<Addphoto value={addUserDocumetPhoto}/>}
            <Continuestep nextStep={authorRequest} validation={valid} titel={continueTitel} nameClass={nameClass}/>
            {!error&&data?<Redirect to='/registrsuccess'/>:''}   
        </div>        
        </section>  
        </main>
    </>
  )
}


export default UserDocumentPhoto