import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/profile.module.scss'

export default function Footer (){
    return(
    <footer className={style.footer}>
        <div className={style.footer_wrapper}>
            <span>© SkillDrive Inc. 2020</span>
                <div >
                    <Link
                     className="footer_vk"
                     href=""
                     target="_blank"
                     aria-label="Вы сфокусированы на ссылки которая ведет на сайт Vkontakte">
                        <a>
                            <Image
                            src="/img/vk.svg"
                            alt="logo vkontakte"
                            width={32}
                            height={32}
                            />
                        </a>
                    </Link>
                    <Link
                    className="footer__insta"
                    href=""
                    target="_blank"
                    aria-label="Вы сфокусированы на ссылки которая ведет на сайт instagram">
                        <a>
                            <Image
                            src="/img/instagram.svg"
                            alt="logo instagram"
                            width={32}
                            height={32}/>
                        </a>
                    </Link>
                    <Link
                    className="footer__facebook"
                    href="" target="_blank"
                    aria-label="Вы сфокусированы на ссылки которая ведет на сайт facebook">
                        <a>
                            <Image
                            src="/img/facebook.svg"
                            alt="logo facebook"
                            width={32}
                            height={32}
                            />
                        </a>
                    </Link>
            </div>
        </div>
    </footer>
    )
}