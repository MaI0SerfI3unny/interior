import { useState } from "react";
import { ProfileSettingsFormStyles } from "./ProfileSettingsFormStyles.styled";
import { useTranslation } from "react-i18next";
import ProfileSettingsInput from "../ProfileSettingsInput/ProfileSettingsInput";
import GeneralModal from "../GeneralModal/GeneralModal";
import ProfileEmailNotificationModal from "../ProfileEmailNotificationModal/ProfileEmailNotificationModal";
import ProfileChangePasswordContainer from "../ProfileChangePasswordContainer/ProfileChangePasswordContainer";
import ProfileChangePasswordModal from "../ProfileChangePasswordModal/ProfileChangePasswordModal";
import ProfileDeleteAccountContainer from "../ProfileDeleteAccountContainer/ProfileDeleteAccountContainer";
import ProfileDeleteAccountModal from "../ProfileDeleteAccountModal/ProfileDeleteAccountModal";

const ProfileSettingsForm = () => {
  const { t } = useTranslation();
  const [isChangingName, setIsChangingName] = useState(false);
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [name, setName] = useState("John");
  const [email] = useState("example@gmail.com");

  const [isShowEmailNotification, setIsShowEmailNotification] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  function onNameSave(value) {
    //DISPATCH CHANGE NAME
    setName(value);
    setIsChangingName(false);
  }
  function onEmailSave(value) {
    //DISPATCH EMAIL

    setNewEmail(value);
    setIsShowEmailNotification(true);
    setIsChangingEmail(false);
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
        value={name}
        handleSubmit={onNameSave}
      />
      <ProfileSettingsInput
        isChanging={isChangingEmail}
        setIsChanging={setIsChangingEmail}
        title={titleEmail}
        description={descriptionEmail}
        changingTitle={changeEmail}
        inputName="email"
        value={email}
        handleSubmit={onEmailSave}
      />
      <ProfileChangePasswordContainer
        isChanging={isChangingPassword}
        setIsChanging={setIsChangingPassword}
      />

      <ProfileDeleteAccountContainer toggleModal={setIsDeleting} />

      {isShowEmailNotification && (
        <GeneralModal toggleModal={() => setIsShowEmailNotification(false)}>
          <ProfileEmailNotificationModal
            newEmail={newEmail}
            setIsChanging={setIsChangingPassword}
          />
        </GeneralModal>
      )}

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
