import { ProfileAllGenerationsPhotoModalStyles } from "./ProfileAllGenerationsPhotoModalStyles.styled";
import { useTranslation } from "react-i18next";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import ProfileAllGenerationsModalRequestInfo from "../ProfileAllGenerationsModalRequestInfo/ProfileAllGenerationsModalRequestInfo";
import ProfileAllGenerationsPhotoModalResult from "../ProfileAllGenerationsPhotoModalResult/ProfileAllGenerationsPhotoModalResult";
import { useState } from "react";
import GeneralModal from "../GeneralModal/GeneralModal";
import SavingPhoto from "../SavingPhoto/SavingPhoto";

const ProfileAllGenerationsPhotoModal = ({
  toggleModal,
  photo,
  handleDeletePhoto,
}) => {
  const { t } = useTranslation();
  const [isDeleting, setIsDeleting] = useState(false);

  const deletingText = t("settings.photoDeleted");

  return (
    <>
      <ProfileAllGenerationsPhotoModalStyles>
        <CloseModalButton toggleModal={toggleModal} />
        <h2>{t("settings.photoModalTitle")}</h2>

        <div className="content-container">
          <ProfileAllGenerationsModalRequestInfo photo={photo} />
          <ProfileAllGenerationsPhotoModalResult
            photo={photo}
            handleDeletePhoto={handleDeletePhoto}
            toggleModal={toggleModal}
            setIsDeleting={setIsDeleting}
          />
        </div>
      </ProfileAllGenerationsPhotoModalStyles>
      {isDeleting && (
        <GeneralModal toggleModal={toggleModal}>
          <SavingPhoto text={deletingText} />
        </GeneralModal>
      )}
    </>
  );
};

export default ProfileAllGenerationsPhotoModal;
