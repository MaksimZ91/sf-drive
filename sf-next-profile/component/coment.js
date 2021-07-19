import Image from 'next/image'
import style from '../styles/profile.module.scss'

export default function Coment (){
  return(
    <>
    <section className={style.coment}>
      <h2>Отзывы о вас</h2>
      <div className={style.coment_wrapper}>
        <div className={style.coment_wrapper_pesron}>
            <Image
            src='/img/coment_user.svg'
            alt="person_foto"
            width={55}
            height={55}
            />
            <div className={style.coment_wrapper_pesron_info}>
                <p>Владимир И.</p>
                <p>Март 2020</p>
            </div>
        </div>
      <p>Аккуратный водитель, автомобиль вернул чистым и заправленным. Рекомендую Константина как арендатора!</p>                    
      </div>
    </section>
    </>
  )
}

