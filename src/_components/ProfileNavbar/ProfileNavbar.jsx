import { NavLink } from "react-router-dom";
import { ProfileNavbarStyles } from "./ProfileNavbarStyles.styled";

export const ProfileNavbar = () => {
  return (
    <ProfileNavbarStyles>
      <ul>
        <li>
          <NavLink
            to="/profile/main"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Генерації
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/plan"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Мій тарифний план
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Особисті дані
          </NavLink>
        </li>
      </ul>
      <hr />
    </ProfileNavbarStyles>
  );
};
