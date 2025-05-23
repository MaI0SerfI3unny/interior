import { ProfileSettingsAvatarContainerStyles } from "./ProfileSettingsAvatarContainerStyles.styled";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ProfileSettingsEmptyAvatar from "../ProfileSettingsEmptyAvatar/ProfileSettingsEmptyAvatar";
import { useSelector } from "react-redux";
import { selectUserImage } from "../../redux/user/selectors";
import { useDispatch } from "react-redux";
import { changeAvatar } from "../../redux/user/operations";
import { convertToBase64 } from "../../assets/functions/convertToBase64";
import { toastError } from "../../assets/functions/toastNotification";

const ProfileSettingsAvatarContainer = () => {
  const { t } = useTranslation();
  const image = useSelector(selectUserImage);
  const dispatch = useDispatch();

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async e => {
    const file = e.target.files[0];
    if (file) {
      try {
        const baseImg = await convertToBase64(file);
        dispatch(
          changeAvatar({
            image: baseImg,
            successMsg: t("settings.avatarChangedSuccessful"),
            errorMsg: t("settings.error"),
          })
        );
      } catch (error) {
        toastError(t("settings.error"));
      }
    }
  };

  return (
    <ProfileSettingsAvatarContainerStyles>
      {image ? (
        // eslint-disable-next-line no-undef
        <img src={`${process.env.REACT_APP_IMG_URL}${image}`} />
      ) : (
        <ProfileSettingsEmptyAvatar />
      )}
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
