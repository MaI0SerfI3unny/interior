import { ProfileChangePasswordFormStyles } from "./ProfileChangePasswordFormStyles.styled";
import ProfileChangePasswordInput from "../ProfileChangePasswordInput/ProfileChangePasswordInput";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const initialValues = {
  oldPassword: "",
  newPassword: "",
  repeatingPassword: "",
};

function isValidPassword(password) {
  const hasMinLength = password.length >= 8;
  const hasLetter = /[a-zA-Zа-яА-Я]/.test(password);
  const hasNumber = /\d/.test(password);

  return hasMinLength && hasLetter && hasNumber;
}

const ProfileChangePasswordForm = () => {
  const [values, setValues] = useState(initialValues);
  const { t } = useTranslation();

  function onSubmitPress(e) {
    e.preventDefault();
    console.log(values);
  }

  function onInputChange({ target: { name, value } }) {
    setValues({ ...values, [name]: value });
  }
  const oldPasswordKey = "settings.enterOldPassword";
  const newPasswordKey = "settings.enterNewPassword";
  const repeatingPasswordKey = "settings.repeatNewPassword";

  const { oldPassword, newPassword, repeatingPassword } = values;

  const isDisabled =
    newPassword !== repeatingPassword ||
    !isValidPassword(newPassword) ||
    !isValidPassword(oldPassword) ||
    oldPassword === newPassword;

  return (
    <ProfileChangePasswordFormStyles onSubmit={onSubmitPress}>
      <ProfileChangePasswordInput
        value={oldPassword}
        titleKey={oldPasswordKey}
        handleChange={onInputChange}
        name="oldPassword"
      />
      <ProfileChangePasswordInput
        value={newPassword}
        titleKey={newPasswordKey}
        handleChange={onInputChange}
        name="newPassword"
      />
      <ProfileChangePasswordInput
        value={repeatingPassword}
        titleKey={repeatingPasswordKey}
        handleChange={onInputChange}
        name="repeatingPassword"
      />

      <button className="save-btn" type="submit" disabled={isDisabled}>
        {t("settings.saveBtn")}
      </button>
    </ProfileChangePasswordFormStyles>
  );
};

export default ProfileChangePasswordForm;
