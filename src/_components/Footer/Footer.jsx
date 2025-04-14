import style from "./style.module.scss"
import logo from "@/assets/logo.png"
import copyright from "@/assets/icons/copyright.svg"
import telegram from "@/assets/icons/telegram.svg"
import phone from "@/assets/icons/phone.svg"
import instagram from "@/assets/icons/instagram.svg"
import facebook from "@/assets/icons/facebook.svg"

export const Footer = () => {
    return(
        <div>
            <div className={style.footerMain}>
                <div className={style.footerMainContainer}>
                    <div className={style.footerMainContainerInfo}>
                        <div className={style.footerMainContainerInfoList}>
                            <div className={style.footerMainContainerInfoListItem}>
                                <p className={style.footerMainContainerInfoListItemKey}>Text</p>
                                <p className={style.footerMainContainerInfoListItemValue}>Telefon: <a href="tel:+38000000000">+380 0000 0000</a></p>
                            </div>
                            <div className={style.footerMainContainerInfoListItem}>
                                <p className={style.footerMainContainerInfoListItemKey}>Text</p>
                                <p className={style.footerMainContainerInfoListItemValue}>E-Mail: <a href="mailto:Examplepost@com">Examplepost@com</a></p>
                            </div>
                        </div>
                        <div className={style.footerMainContainerInfoLogo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className={style.footerMainContainerInfoSocial}>
                            <a href="" target="_blank"><img src={telegram} alt="telegram"/></a>
                            <a href="" target="_blank"><img src={facebook} alt="facebook"/></a>
                            <a href="" target="_blank"><img src={phone} alt="phone"/></a>
                            <a href="" target="_blank"><img src={instagram} alt="instagram"/></a>
                        </div>
                    </div>
                    <div className={style.footerMainContainerCopy}>
                        <img src={copyright} alt="copyright"/>
                        <p>Copyright {new Date().getFullYear()} All Right Reserved</p>
                    </div>
                </div>
            </div>
            <div className={style.footerAdditional}>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    )
}