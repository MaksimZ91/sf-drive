import React from 'react'


function UserBlock (props){
    return(
        <>
        <div className={props.name}>
                <div className={`${props.name}_wrapper`}>
                    <img className={`${props.name}_wrapper_img`} src='../src/img/person_owner.svg'/>
                    <p className={`${props.name}_wrapper_name`}>Иван И.</p>
                    <p className={`${props.name}_wrapper_owner`}>Владелец</p>
                    <p className={`${props.name}_wrapper_profile`}><a>Посмотреть профиль</a></p>
                </div>
            </div>
        </>
    )
}

export default UserBlock