import React from 'react'
import Backarrow from '../../backarrow/backArrow'
import AddAvatarPhoto from './addAvataPhoto'
import { addAvatar } from '../../../../redux/actions/userAction.js'
import { useSelector } from 'react-redux'


function LoadAvatarPage () {
    const backlink = "/registr"
    const backName = 'add_avatar_back'
    const userAvatar = useSelector((state)=>{
        return state.user.userAvatar
    })


    return(
        <>
        <main>
            <section>
                <Backarrow
                value={backlink}
                name={backName}
                />
                <div>
                    <p>Шаг 2 из 3</p>
                    <h1>Загрузите селфи</h1>
                    <p>Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</p>
                </div>
                <AddAvatarPhoto
                value={addAvatar}  
                />              
            </section>
        </main>
        </>
    )
}

export default LoadAvatarPage