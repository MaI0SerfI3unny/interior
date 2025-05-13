import { ProfileAllGenerationsPhotoModalStyles } from "./ProfileAllGenerationsPhotoModalStyles.styled";
import { useTranslation } from "react-i18next";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import ProfileAllGenerationsModalRequestInfo from "../ProfileAllGenerationsModalRequestInfo/ProfileAllGenerationsModalRequestInfo";
import ProfileAllGenerationsPhotoModalResult from "../ProfileAllGenerationsPhotoModalResult/ProfileAllGenerationsPhotoModalResult";

const ProfileAllGenerationsPhotoModal = ({ toggleModal, photo }) => {
  const { t } = useTranslation();

  return (
    <>
      <ProfileAllGenerationsPhotoModalStyles>
        <CloseModalButton toggleModal={toggleModal} />
        <h2>{t("settings.photoModalTitle")}</h2>

        <div className="content-container">
          <ProfileAllGenerationsModalRequestInfo photo={photo} />
          <ProfileAllGenerationsPhotoModalResult
            photo={photo}
            toggleModal={toggleModal}
          />
        </div>
      </ProfileAllGenerationsPhotoModalStyles>
    </>
  );
};

export default ProfileAllGenerationsPhotoModal;
