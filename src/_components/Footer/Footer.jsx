import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import logo from "@/assets/logo_footer.svg";
import { FooterLink } from "../FooterLink/FooterLink.jsx";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={style.footerMain}>
        <div className={style.footerMainContainer}>
          <div className={style.footerMainContainerInfo}>
            <img src={logo} alt="logo" />
            <p>{t("nav.footDesc")}</p>
          </div>
          <div className={style.footerMainContainerLink}>
            <div>
              <Link to="/">{t("nav.home")}</Link>
              <FooterLink id="whyWe">{t("nav.whyWe")}</FooterLink>
              <FooterLink id="roadmap">{t("nav.howGenerate")}</FooterLink>
            </div>
            <div>
              <Link to="/generating">{t("nav.generate")}</Link>
              <FooterLink id="gallery">{t("nav.gallery")}</FooterLink>
              <FooterLink id="reviews">{t("nav.comment")}</FooterLink>
            </div>
            <div>
              <Link to="/subscribes">{t("nav.subscribe")}</Link>
              <Link to="/faq">{t("nav.faq")}</Link>
            </div>
          </div>

          <div className={style.footerMainContainerLinkTablet}>
            <div>
              <Link to="/">{t("nav.home")}</Link>
              <FooterLink id="whyWe">{t("nav.whyWe")}</FooterLink>
            </div>
            <div>
              <FooterLink id="roadmap">{t("nav.howGenerate")}</FooterLink>
              <Link to="/generating">{t("nav.generate")}</Link>
            </div>
            <div>
              <FooterLink id="gallery">{t("nav.gallery")}</FooterLink>
              <FooterLink id="reviews">{t("nav.comment")}</FooterLink>
            </div>
            <div>
              <Link to="/faq">{t("nav.faq")}</Link>
              <Link to="/subscribes">{t("nav.subscribe")}</Link>
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
            <a href="">{t("nav.privacy")}</a>
            <Link to="/terms">{t("nav.terms")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
