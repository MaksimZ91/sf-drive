import React, { useEffect, useState } from 'react'
import Backarrow from '../../backarrow/backArrow'
import AddAvatarPhoto from './addAvataPhoto'
import { addAvatar, addAvatarPhotoName } from '../../../../redux/actions/userAction.js'
import { useSelector, useDispatch } from 'react-redux'
import { showAlert, showLoading, hideLoading  } from '../../../../redux/actions/actions'
import './scss/avatar.scss'
import Continuestep from '../../continueStep/continuestep'
import { useHttp } from '../../../hooks/http.hook'
import Error from '../../error/error'
import { Redirect } from 'react-router-dom'


function LoadAvatarPage () {
    const { request } = useHttp()
    const [ valid, setValid ] = useState(true)
    const [ error, setError ]= useState(false)
    const [ data, setData ] = useState(null)
    const dispatch = useDispatch()    
    const backlink = "/registr"
    const backName = 'add_avatar_back'
    const continueTitel ='Продолжить'
    const nameClass = "new_auto_continue"
    const form = useSelector((state)=>{
        return { userAvatar:state.user.avatarPhotoName, userID:state.user.newUserID }
    })
    const alert = useSelector((state)=>{
        return state.app.alert
    })
    const authorRequest = async () => { 
        try { 
          dispatch(showLoading())
           const result =  await request('http://localhost:5000/user/avatar','POST', form)
            dispatch(hideLoading())   
            setData(result)  
        } catch (e) {           
            dispatch(showAlert('Не удалось продолжить регистрацию. Попробуйте ещё раз'))
            setError(true)
        }     
    } 
    useEffect(()=>{
        if(form.userAvatar){
            setValid(false)
        }
    },[form.userAvatar])


    return(
        <>
        <main>
            {alert?<Error text={ alert }/>:''}
            <section className='add_avatar'> 
            <Backarrow value={backlink} name={backName}/>               
                <div className='add_avatar_titel'>                                    
                    <p>Шаг 2 из 3</p>                                   
                    <h1>Загрузите селфи</h1>
                    <p>Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</p>
                </div>
                <AddAvatarPhoto
                value={ addAvatar } 
                avatarName={ addAvatarPhotoName } 
                />              
            </section>
            <Continuestep nextStep={authorRequest} validation={valid} titel={continueTitel} nameClass={nameClass}/>
            {!error&&data?<Redirect to='/finelstep'/>:''}    
        </main>
        </>
    )
}

export default LoadAvatarPage