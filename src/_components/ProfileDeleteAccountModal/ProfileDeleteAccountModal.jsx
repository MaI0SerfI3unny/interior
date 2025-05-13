import { ProfileDeleteAccountModalStyles } from "./ProfileDeleteAccountModalStyles.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useTranslation } from "react-i18next";

const ProfileDeleteAccountModal = ({ toggleModal }) => {
  const { t } = useTranslation();

  function deleteAccount() {
    //DISPATCH DELETE

    console.log("Bye");
    toggleModal(false);
  }

  return (
    <ProfileDeleteAccountModalStyles>
      <CloseModalButton toggleModal={() => toggleModal(false)} />
      <h2>{t("settings.deleteModalTitle")}</h2>
      <p>{t("settings.deleteAccountAttention")}</p>
      <div className="btns-container">
        <button className="dont-delete-btn" onClick={deleteAccount}>
          {t("settings.deleteAccountButton")}
        </button>
        <button className="delete-btn" onClick={() => toggleModal(false)}>
          {t("settings.dontDeleteAccountButton")}
        </button>
      </div>
    </ProfileDeleteAccountModalStyles>
  );
};

export default ProfileDeleteAccountModal;
