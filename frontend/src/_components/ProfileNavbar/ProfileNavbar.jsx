import { NavLink } from "react-router-dom";
import { ProfileNavbarStyles } from "./ProfileNavbarStyles.styled";
import { useTranslation } from "react-i18next";

export const ProfileNavbar = () => {
  const { t } = useTranslation();
  return (
    <ProfileNavbarStyles>
      <ul>
        <li>
          <NavLink
            to="/profile/main"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("settings.generationsNavBar")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/plan"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("settings.planNavBar")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("settings.profileNavBar")}
          </NavLink>
        </li>
      </ul>
      <hr />
    </ProfileNavbarStyles>
  );
};
