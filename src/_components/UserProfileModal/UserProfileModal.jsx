import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as Profile } from "../../assets/icons/Users_circle.svg";
import { ReactComponent as LogOut } from "../../assets/icons/login2.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/operations.js";
import css from "./UserProfileModal.module.scss";
import { useEffect, useRef } from "react";

export const UserProfileModal = ({ toggleModal, buttonRef }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    toggleModal();
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        toggleModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleModal]);

  return (
    <div className={css.modal} ref={modalRef}>
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
