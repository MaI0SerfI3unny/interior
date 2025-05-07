import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

export const ProfileNavbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbarLink}>
        <NavLink
          to="/profile/main"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Генерації
        </NavLink>
        <NavLink
          to="/profile/plan"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Мій тарифний план
        </NavLink>
        <NavLink
          to="/profile/settings"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Особисті дані
        </NavLink>
      </div>
      <hr />
    </div>
  );
};
