import { ProfileEmailNotificationModalStyles } from "./ProfileEmailNotificationModalStyles.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useTranslation } from "react-i18next";

const ProfileEmailNotificationModal = ({ toggleModal, newEmail }) => {
  const { t } = useTranslation();

  function goToEmail() {
    const [, email] = newEmail.split("@");
    window.open(`https://${email}`, "_blank", "noopener,noreferrer");

    toggleModal();
  }

  return (
    <ProfileEmailNotificationModalStyles>
      <CloseModalButton toggleModal={toggleModal} />
      <p className="notification">{t("settings.confirmEmailButton")}</p>
      <button type="button" className="go-mail-btn" onClick={goToEmail}>
        {t("settings.goToEmailButton")}
      </button>
    </ProfileEmailNotificationModalStyles>
  );
};

export default ProfileEmailNotificationModal;
