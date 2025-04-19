import { Link, NavLink } from "react-router-dom";
import style from "./style.module.scss";
import logo from "@/assets/logo.svg";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.headerContainerLinkContainer}>
          <a href="">Головна</a>
          <a href="">Генерація</a>
          <a href="">Підписка</a>
          <NavLink to="/faq">FAQ</NavLink>
        </div>
        <Link className={style.signBtn} to="/signin">Вхід/Реєстрація</Link>
      </div>
    </div>
  );
};
