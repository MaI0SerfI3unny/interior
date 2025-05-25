import { useSelector } from "react-redux";
import { selectUser, selectUserImage } from "../../redux/user/selectors.js";
import css from "./UserMenu.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { ReactComponent as Chevron } from "../../assets/icons/chevron_down.svg";
import { ReactComponent as PlanIcon } from "../../assets/icons/Plan.svg";
import { useCallback, useRef, useState } from "react";
import { UserProfileModal } from "../UserProfileModal/UserProfileModal.jsx";

export const UserMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const userImage = useSelector(selectUserImage);
  const { active_plan: plan } = useSelector(selectUser);
  const { name } = useSelector(selectUser);
  const { t } = useTranslation();
  // eslint-disable-next-line no-undef
  const url = process.env.REACT_APP_IMG_URL;
  // const plan = "Pro";

  const buttonRef = useRef(null);

  const toggleModal = useCallback(() => {
    setShowModal(prev => !prev);
  }, []);

  return (
    <div className={css.userMenuBox}>
      <button
        type="button"
        className={css.userBtn}
        onClick={toggleModal}
        ref={buttonRef}
      >
        <div className={css.imageBox}>
          {userImage ? (
            <img
              src={`${url}${userImage}`}
              alt="User image"
              className={css.userImage}
            />
          ) : (
            <div className={clsx(css.userImage, css.userImageName)}>
              {typeof name === "string" && name.length > 0 ? name[0] : "U"}
            </div>
          )}
          {plan === "Pro" && <PlanIcon className={css.planIcon} />}
        </div>

        <div className={css.nameBox}>
          <p>
            {t("userMenu.greeting")}
            {name}
          </p>
          <Chevron />
        </div>
      </button>
      {showModal && (
        <UserProfileModal toggleModal={toggleModal} buttonRef={buttonRef} />
      )}
    </div>
  );
};
