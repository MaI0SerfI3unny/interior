import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as Profile } from "../../assets/icons/Users_circle.svg";
import { ReactComponent as LogOut } from "../../assets/icons/login2.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/operations.js";
import css from "./UserProfileModal.module.scss";

export const UserProfileModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toggleModal();
  };

  return (
    <div className={css.modal}>
      <div className={css.profileLink} onClick={toggleModal}>
        <Profile />
        <Link to="/profile/main">{t("userMenu.profile")}</Link>
      </div>
      <div className={css.profileLink} onClick={handleLogout}>
        <LogOut />
        <p>{t("userMenu.logout")}</p>
      </div>
    </div>
  );
};
