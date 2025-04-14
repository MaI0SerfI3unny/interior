import style from "./style.module.scss"
import logo from "@/assets/logo.png"

export const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.headerContainer}>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.headerContainerLinkContainer}>
                    <a href="">Головна</a>
                    <a href="">Генерація</a>
                    <a href="">Тарифи</a>
                    <a href="">FAQ</a>
                </div>
                <a className={style.signBtn}>Вхід/Реєстрація</a>
            </div>
        </div>
    )
}