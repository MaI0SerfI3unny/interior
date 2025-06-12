import { ProfileDeleteAccountModalStyles } from "./ProfileDeleteAccountModalStyles.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { deleteUser } from "../../redux/user/operations";
import { useDispatch } from "react-redux";
import SmallSpinner from "../SmallSpinner/SmallSpinner";

const ProfileDeleteAccountModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  async function deleteAccount() {
    setIsDeleting(true);
    await dispatch(deleteUser({ errorMsg: t("settings.error") }));

    setIsDeleting(false);
  }

  return (
    <ProfileDeleteAccountModalStyles>
      <CloseModalButton toggleModal={() => toggleModal(false)} />
      <h2>{t("settings.deleteModalTitle")}</h2>
      <p>{t("settings.deleteAccountAttention")}</p>
      <div className="btns-container">
        <button
          className="dont-delete-btn"
          disabled={isDeleting}
          onClick={deleteAccount}
        >
          {isDeleting ? <SmallSpinner /> : t("settings.deleteAccountButton")}
        </button>
        <button
          className="delete-btn"
          onClick={toggleModal}
          disabled={isDeleting}
        >
          {t("settings.dontDeleteAccountButton")}
        </button>
      </div>
    </ProfileDeleteAccountModalStyles>
  );
};

export default ProfileDeleteAccountModal;
