import { useState } from "react";
import { ProfileSettingsFormStyles } from "./ProfileSettingsFormStyles.styled";
import { useTranslation } from "react-i18next";
import ProfileSettingsInput from "../ProfileSettingsInput/ProfileSettingsInput";
import GeneralModal from "../GeneralModal/GeneralModal";
// import ProfileEmailNotificationModal from "../ProfileEmailNotificationModal/ProfileEmailNotificationModal";
import ProfileChangePasswordContainer from "../ProfileChangePasswordContainer/ProfileChangePasswordContainer";
import ProfileChangePasswordModal from "../ProfileChangePasswordModal/ProfileChangePasswordModal";
import ProfileDeleteAccountContainer from "../ProfileDeleteAccountContainer/ProfileDeleteAccountContainer";
import ProfileDeleteAccountModal from "../ProfileDeleteAccountModal/ProfileDeleteAccountModal";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/user/selectors";
import { changeUserEmail, changeUserName } from "../../redux/user/operations";

const ProfileSettingsForm = () => {
  const { t } = useTranslation();
  const [isChangingName, setIsChangingName] = useState(false);
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoadingChangingEmail, setIsLoadingChangingEmail] = useState(false);
  const [isLoadingChangingName, setIsLoadingChangingName] = useState(false);

  // const [isShowEmailNotification, setIsShowEmailNotification] = useState(false);

  async function onNameSave(value) {
    setIsLoadingChangingName(true);

    try {
      const successMsg = t("settings.changedNameSuccess");
      const errorMsg = t("settings.error");
      await dispatch(changeUserName({ name: value, successMsg, errorMsg }));
    } finally {
      setIsLoadingChangingName(false);
      setIsChangingName(false);
    }
  }
  async function onEmailSave(value) {
    setIsLoadingChangingEmail(true);

    try {
      const successMsg = t("settings.changedEmailSuccess");
      const errorMsg = t("settings.error");
      await dispatch(changeUserEmail({ value, successMsg, errorMsg }));
    } finally {
      setIsLoadingChangingEmail(false);
      setIsChangingEmail(false);
    }

    // setIsShowEmailNotification(true);
  }

  const titleName = "settings.nameInput";
  const descriptionName = "settings.nameDescription";
  const changeName = "settings.changeName";
  const titleEmail = "settings.emailInput";
  const descriptionEmail = "settings.emailDescription";
  const changeEmail = "settings.changeEmail";

  return (
    <ProfileSettingsFormStyles>
      <h2>{t("settings.personalData")}</h2>
      <ProfileSettingsInput
        isChanging={isChangingName}
        setIsChanging={setIsChangingName}
        title={titleName}
        description={descriptionName}
        changingTitle={changeName}
        inputName="name"
        initialValue={user.name}
        handleSubmit={onNameSave}
        isLoading={isLoadingChangingName}
      />
      {user.reg_type !== "google" && (
        <>
          <ProfileSettingsInput
            isChanging={isChangingEmail}
            setIsChanging={setIsChangingEmail}
            title={titleEmail}
            description={descriptionEmail}
            changingTitle={changeEmail}
            inputName="email"
            initialValue={user.email}
            handleSubmit={onEmailSave}
            isLoading={isLoadingChangingEmail}
          />
          <ProfileChangePasswordContainer
            isChanging={isChangingPassword}
            setIsChanging={setIsChangingPassword}
          />
        </>
      )}

      <ProfileDeleteAccountContainer toggleModal={setIsDeleting} />

      {/* {isShowEmailNotification && (
        <GeneralModal toggleModal={() => setIsShowEmailNotification(false)}>
          <ProfileEmailNotificationModal
            newEmail={newEmail}
            setIsChanging={setIsChangingPassword}
          />
        </GeneralModal>
      )} */}

      {isChangingPassword && (
        <GeneralModal toggleModal={() => setIsChangingPassword(false)}>
          <ProfileChangePasswordModal />
        </GeneralModal>
      )}

      {isDeleting && (
        <GeneralModal toggleModal={() => setIsDeleting(false)}>
          <ProfileDeleteAccountModal
            isDeleting={isDeleting}
            toggleModal={setIsDeleting}
          />
        </GeneralModal>
      )}
    </ProfileSettingsFormStyles>
  );
};

export default ProfileSettingsForm;
