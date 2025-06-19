import { ProfileDeleteAccountContainerStyles } from "./ProfileDeleteAccontContainerStyles.styled";
import { useTranslation } from "react-i18next";

const ProfileDeleteAccountContainer = ({ toggleModal }) => {
  const { t } = useTranslation();
  return (
    <ProfileDeleteAccountContainerStyles>
      <h3>{t("settings.accountTitle")}</h3>
      <div className="info-btn-container">
        <div>
          <h4>{t("settings.deleteAccount")}</h4>
          <p>{t("settings.deleteAccountDescription")}</p>
        </div>
        <button onClick={() => toggleModal(true)}>
          {t("settings.deleteAccountButton")}
        </button>
      </div>
    </ProfileDeleteAccountContainerStyles>
  );
};

export default ProfileDeleteAccountContainer;
