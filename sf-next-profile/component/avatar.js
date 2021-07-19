import Image from 'next/image'
import style from '../styles/profile.module.scss'

export default function UserAvatart () {
  return(
    <>
    <section className={style.user_avatar}>
      <Image
      src='/img/user_avatar.svg'
      alt='user_photo'
      width={200}
      height={200}
      />
      <div className={style.user_avatar_wrapper}>
        <h2>Константин К.</h2>
        <Image
        src='/img/edit.svg'
        alt='edit_image'
        width={30}
        height={30}
        />
      </div>  
      <p>Выйти из профиля</p>
    </section>
    </>    
  )
}