import React from 'react'
import Backarrow from '../../backarrow/backArrow'
import AddAvatarPhoto from './addAvataPhoto'
import { addAvatar, addAvatarPhotoName } from '../../../../redux/actions/userAction.js'
import { useSelector } from 'react-redux'
import './scss/avatar.scss'


function LoadAvatarPage () {
    const backlink = "/registr"
    const backName = 'add_avatar_titel_wrapper_back'
    const userAvatar = useSelector((state)=>{
        return state.user.userAvatar
    })


    return(
        <>
        <main>
            <section className='add_avatar'>                
                <div className='add_avatar_titel'>
                    <div className='add_avatar_titel_wrapper'>
                    <Backarrow value={backlink} name={backName}/>
                    <p className='add_avatar_titel_wrapper_step'>Шаг 2 из 3</p>
                    </div>                    
                    <h1>Загрузите селфи</h1>
                    <p>Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</p>
                </div>
                <AddAvatarPhoto
                value={addAvatar} 
                avatarName={addAvatarPhotoName} 
                />              
            </section>
        </main>
        </>
    )
}

export default LoadAvatarPage