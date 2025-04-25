import style from "./style.module.scss"
import logo from "@/assets/logo_footer.svg"


export const Footer = () => {
    return(
        <div>
            <div className={style.footerMain}>
                <div className={style.footerMainContainer}>
                    <div className={style.footerMainContainerInfo}>
                        <img src={logo} alt="logo"/>
                        <p>Ваш персональний майбутній інтер’єр за лічені секунди</p>
                    </div>
                    <div className={style.footerMainContainerLink}>
                        <div>
                            <a href="">Головна</a>
                            <a href="">Чому ми</a>
                            <a href="">Як згенерувати</a>
                        </div>
                        <div>
                            <a href="">Генерація</a>
                            <a href="">Галерея</a>
                            <a href="">Відгуки</a>
                        </div>
                        <div>
                            <a href="">Підписка</a>
                            <a href="">FAQ</a>
                        </div>
                    </div>

                    <div className={style.footerMainContainerLinkTablet}>
                        <div>
                            <a href="">Головна</a>
                            <a href="">Чому ми</a>
                        </div>
                        <div>
                            <a href="">Як згенерувати</a>
                            <a href="">Генерація</a>
                        </div>
                        <div>
                            <a href="">Галерея</a>
                            <a href="">Відгуки</a>
                        </div>
                        <div>
                            <a href="">FAQ</a>
                            <a href="">Підписка</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerAdditional}>
                <div className={style.footerAdditionalContainer}>
                    <p className={style.footerAdditionalContainerCopy}>© North Heat & Air {new Date().getFullYear()}. All rights reserved</p>
                    <div>
                        <a href="">Умови Конфіденційності</a>
                        <a href="">Умови Користування</a>
                    </div>
                </div>
            </div>
        </div>
    )
}