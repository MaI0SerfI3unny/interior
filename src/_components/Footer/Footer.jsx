import { Link } from "react-router-dom";
import style from "./style.module.scss";
import logo from "@/assets/logo_footer.svg";
import { FooterLink } from "../FooterLink/FooterLink.jsx";

export const Footer = () => {
  return (
    <div>
      <div className={style.footerMain}>
        <div className={style.footerMainContainer}>
          <div className={style.footerMainContainerInfo}>
            <img src={logo} alt="logo" />
            <p>Ваш персональний майбутній інтер’єр за лічені секунди</p>
          </div>
          <div className={style.footerMainContainerLink}>
            <div>
              <Link to="/">Головна</Link>
              <FooterLink id="whyWe">Чому ми</FooterLink>
              <FooterLink id="roadmap">Як згенерувати</FooterLink>
            </div>
            <div>
              <Link to="/generating">Генерація</Link>
              <FooterLink id="gallery">Галерея</FooterLink>
              <FooterLink id="reviews">Відгуки</FooterLink>
            </div>
            <div>
              <Link to="/subscribes">Підписка</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          <div className={style.footerMainContainerLinkTablet}>
            <div>
              <Link to="/">Головна</Link>
              <FooterLink id="whyWe">Чому ми</FooterLink>
            </div>
            <div>
              <FooterLink id="roadmap">Як згенерувати</FooterLink>
              <Link to="/generating">Генерація</Link>
            </div>
            <div>
              <FooterLink id="gallery">Галерея</FooterLink>
              <FooterLink id="reviews">Відгуки</FooterLink>
            </div>
            <div>
              <Link to="/faq">FAQ</Link>
              <Link to="/subscribes">Підписка</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footerAdditional}>
        <div className={style.footerAdditionalContainer}>
          <p className={style.footerAdditionalContainerCopy}>
            © North Heat & Air {new Date().getFullYear()}. All rights reserved
          </p>
          <div>
            <a href="">Умови Конфіденційності</a>
            <a href="">Умови Користування</a>
          </div>
        </div>
      </div>
    </div>
  );
};
