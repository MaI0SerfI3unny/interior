import { ProfileSettingsAvatarContainerStyles } from "./ProfileSettingsAvatarContainerStyles.styled";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ProfileSettingsEmptyAvatar from "../ProfileSettingsEmptyAvatar/ProfileSettingsEmptyAvatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";

const ProfileSettingsAvatarContainer = () => {
  const { t } = useTranslation();
  const { photo } = useSelector(selectUser);

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
      {photo ? <img src="photo" /> : <ProfileSettingsEmptyAvatar />}
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
