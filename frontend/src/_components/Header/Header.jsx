import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import style from "./style.module.scss";
import logo from "@/assets/logo.svg";
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/user/selectors.js";
import { UserMenu } from "../UserMenu/UserMenu.jsx";

const navItems = [
  { path: "/", key: "nav.home" },
  { path: "/generating", key: "nav.generate" },
  { path: "/subscribes", key: "nav.subscribe" },
  { path: "/faq", key: "nav.faq" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectisLoggedIn);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${style.header} ${scrolled ? style.stuckToTop : style.defaultOffset}`}
    >
      <div className={style.headerContainer}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className={style.headerContainerLinkContainer}>
          {navItems.map(({ path, key }) => (
            <NavLink
              key={key}
              to={path}
              className={({ isActive }) =>
                isActive ? style.activeLink : undefined
              }
            >
              {t(key)}
            </NavLink>
          ))}
        </div>

        <div className={style.headerContainerLinkAdditional}>
          <div className={style.headerContainerLinkAdditionalLang}>
            <LanguageSwitcher />
          </div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <Link className={style.signBtn} to="/signin">
              {t("nav.login")}
            </Link>
          )}

          <div className={style.hamburgerMenu}>
            <div className={style.menuBtn} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
            </div>

            <div
              className={`${style.menuBox} ${isOpen ? style.menuBoxActive : ""}`}
            >
              <div className={style.menuBoxHead}>
                <LanguageSwitcher />
                <div
                  className={style.menuBtnChecked}
                  onClick={() => setIsOpen(false)}
                >
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

            {isOpen && (
              <div
                className={style.menuOverlay}
                onClick={() => setIsOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
