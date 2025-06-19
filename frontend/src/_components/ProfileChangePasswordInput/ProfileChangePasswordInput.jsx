import { ProfileChangePasswordInputStyles } from "./ProfileChangePasswordInputStyles.styled";
import { ReactComponent as EyeIcon } from "../../svg/eye.svg";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

const ProfileChangePasswordInput = ({
  titleKey,
  value,
  handleChange,
  name,
}) => {
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const inputRef = useRef();

  function onShowPasswordClick() {
    setIsShowPassword(!isShowPassword);
  }
  return (
    <ProfileChangePasswordInputStyles>
      <h3>{t(titleKey)}</h3>
      <div className="input-container">
        <input
          value={value}
          type={isShowPassword ? "text" : "password"}
          onChange={handleChange}
          name={name}
          autoComplete="off"
          ref={inputRef}
        />
        <button
          type="button"
          className="show-password-btn"
          onClick={onShowPasswordClick}
        >
          <EyeIcon width={24} height={24} />
        </button>
      </div>
    </ProfileChangePasswordInputStyles>
  );
};

export default ProfileChangePasswordInput;
