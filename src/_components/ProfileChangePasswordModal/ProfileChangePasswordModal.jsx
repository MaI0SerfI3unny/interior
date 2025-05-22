import { ProfileChangePasswordModalStyles } from "./ProfileChangePasswordModalStyles.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useTranslation } from "react-i18next";
import ProfileChangePasswordForm from "../ProfileChangePasswordForm/ProfileChangePasswordForm";

const ProfileChangePasswordModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  return (
    <ProfileChangePasswordModalStyles>
      <CloseModalButton toggleModal={toggleModal} />

      <h2>{t("settings.changePassword")}</h2>
      <p className="rules">{t("settings.changePasswordRules")}</p>
      <ProfileChangePasswordForm toggleModal={toggleModal} />
    </ProfileChangePasswordModalStyles>
  );
};

export default ProfileChangePasswordModal;
