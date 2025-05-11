import { ProfileSettingsAvatarContainerStyles } from "./ProfileSettingsAvatarContainerStyles.styled";
import userAvatar from "../../pictures/user.jpg";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const ProfileSettingsAvatarContainer = () => {
  const { t } = useTranslation();

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      console.log("Файл выбран:", file.name);
    }
  };

  return (
    <ProfileSettingsAvatarContainerStyles>
      <img src={userAvatar} />
      <form>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <button type="button" onClick={handleClick}>
          {t("settings.changeAvatar")}
        </button>
      </form>
    </ProfileSettingsAvatarContainerStyles>
  );
};

export default ProfileSettingsAvatarContainer;
