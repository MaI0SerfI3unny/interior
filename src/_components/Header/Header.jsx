import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher"
import style from "./style.module.scss";
import logo from "@/assets/logo.svg";

const navItems = [
  { path: "/", key: "nav.home" },
  { path: "/signin", key: "nav.generate" },
  { path: "/subscribes", key: "nav.subscribe" },
  { path: "/faq", key: "nav.faq" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className={style.headerContainerLinkContainer}>
          {navItems.map(({ path, key }) => (
            <NavLink 
              key={key}
              to={path}
              className={({ isActive }) => isActive ? style.activeLink : undefined}
            >
              {t(key)}
            </NavLink>
          ))}
        </div>

        <div className={style.headerContainerLinkAdditional}>
          <div className={style.headerContainerLinkAdditionalLang}>
            <LanguageSwitcher/>
          </div>
          <Link className={style.signBtn} to="/signin">{t("nav.login")}</Link>

          <div className={style.hamburgerMenu}>
            <div className={style.menuBtn} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
            </div>

            <div className={`${style.menuBox} ${isOpen ? style.menuBoxActive : ""}`}>
              <div className={style.menuBoxHead}>
                <LanguageSwitcher />
                <div className={style.menuBtnChecked} onClick={() => setIsOpen(false)}>
                  <span></span>
                </div>
              </div>
              <div className={style.menuBoxLink}>
                {navItems.map(({ path, key }) => (
                  <NavLink 
                    key={key}
                    to={path}
                    className={style.menuItem}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(key)}
                  </NavLink>
                ))}
              </div>
            </div>

            {isOpen && <div className={style.menuOverlay} onClick={() => setIsOpen(false)} />}
          </div>
        </div>
      </div>
    </div>
  );
};

