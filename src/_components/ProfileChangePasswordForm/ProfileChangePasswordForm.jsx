import { ProfileChangePasswordFormStyles } from "./ProfileChangePasswordFormStyles.styled";
import ProfileChangePasswordInput from "../ProfileChangePasswordInput/ProfileChangePasswordInput";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  toastSuccess,
  toastError,
} from "../../assets/functions/toastNotification";
import { safeApi } from "../../api/safeApi";
import SmallSpinner from "../../SmallSpinner/SmallSpinner";

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

const ProfileChangePasswordForm = ({ toggleModal }) => {
  const [values, setValues] = useState(initialValues);
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

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
    oldPassword === newPassword ||
    isLoading;

  async function handleChangePassword(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await safeApi.patch("/user/password", {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_new_password: repeatingPassword,
      });

      toastSuccess(t("settings.passwordChangedSuccess"));
      toggleModal();
    } catch (error) {
      toastError(t("settings.error"));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ProfileChangePasswordFormStyles onSubmit={handleChangePassword}>
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
        {isLoading ? <SmallSpinner /> : t("settings.saveBtn")}
      </button>
    </ProfileChangePasswordFormStyles>
  );
};

export default ProfileChangePasswordForm;
