import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/profile.module.scss'


export default function UserInfo () {
  return(
    <>
    <section className={style.user_info}>
      <div className={style.user_info_date}>
        <p>Дата рождения</p>
        <div className={style.user_info_date_wrapper}>
          <p>02.05.1977</p>
          <Image 
            src='/img/edit.svg'
            alt='edit_image'
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={style.user_info_gender}>
        <p>Пол</p>
        <p>Мужской</p>
      </div>
      <div className={style.user_info_phone}>
        <p>Телефон</p>
        <div className={style.user_info_phone_wrapper}>
          <p>+7 999 123-45-67</p>
          <Image 
            src='/img/edit.svg'
            alt='edit_image'
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={style.user_info_email}>
        <p>Эл. почта</p>
        <div className={style.user_info_email_wrapper}>
          <p>konstantin@mail.ru</p>
          <Image 
            src='/img/edit.svg'
            alt='edit_image'
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={style.user_info_password}>        
        <p>Пароль</p>
        <Link  href=''>
        <a>Изменить</a>
        </Link>
      </div>
    </section>
    </>
  )
}