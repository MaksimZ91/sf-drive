import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/profile.module.scss'
import Footer from './footer'
export  default function  Navigation ({children}){
    return(
    <>
    <Head>
      <title>SF-Drive | UserProfile</title>
    </Head>
    <header className={style.header_profile}>
      <div className={style.header_profile_logoImg}>
        <Image
        src='/img/Logo.svg'        
        alt='logo Image'
        width={115}
        height={28}
        />
      </div>
      <div className={style.header_profile_wrapper}>
      <nav>
        <Link href="http://localhost:8080/booking"><a>Бронирования</a></Link>
        <Link href='http://localhost:8080/myAuto'><a>Мои автомобили</a></Link>
        <Link href='http://localhost:8080/chat'><a>Сообщения</a></Link>
      </nav>
      <Image
      src='/img/avatar-mini.svg'
      alt='mini-avatar-user'
      width={48}
      height={48}
      />
      </div>
    </header>
    <main>
        { children }
    </main>
    <Footer/>
    </>

    )
}