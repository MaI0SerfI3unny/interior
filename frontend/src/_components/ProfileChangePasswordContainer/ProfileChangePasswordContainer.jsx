import { ProfileChangePasswordContainerStyles } from "./ProfileChangePasswordContainerStyles.styled";
import { useTranslation } from "react-i18next";

const ProfileChangePasswordContainer = ({ isChanging, setIsChanging }) => {
  const { t } = useTranslation();
  return (
    <ProfileChangePasswordContainerStyles>
      <div className="input-container">
        <h3>{t("settings.passwordTitle")}</h3>
        <p className="placeholder">****************</p>
      </div>
      <button
        className="changing-btn"
        type="button"
        onClick={() => setIsChanging(!isChanging)}
      >
        {t("settings.changeButton")}
      </button>
      <hr />
    </ProfileChangePasswordContainerStyles>
  );
};

export default ProfileChangePasswordContainer;
