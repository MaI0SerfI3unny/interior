import { ProfileAllGenerationsPhotoModalResultStyles } from "./ProfileAllGenerationsPhotoModalResultStyles.styled";
import { ReactComponent as CloudIcon } from "../../svg/cloud.svg";
import { ReactComponent as ShareIcon } from "../../svg/share.svg";
import { ReactComponent as DeleteIcon } from "../../svg/cart.svg";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { deletePhotoById } from "../../redux/generationFolders/generationFoldersOperations";
import { useSelector } from "react-redux";
import { getGenerationFolders } from "../../redux/generationFolders/generationFoldersSelectors";

const ProfileAllGenerationsPhotoModalResult = ({ photo, toggleModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const folders = useSelector(getGenerationFolders);

  function handleDelete() {
    const { id } = folders.find(fold =>
      fold.photos.some(pict => pict.id === photo.id)
    );

    dispatch(
      deletePhotoById({
        photoId: photo.id,
        folderId: id,
        errorMsg: t("settings.error"),
        successMsg: t("settings.photoDeleted"),
      })
    );
    toggleModal();
  }

  return (
    <ProfileAllGenerationsPhotoModalResultStyles>
      <img src={photo.result} alt="result" />
      {location.pathname === "/profile/main" && (
        <div className="btns-container">
          <a href={photo.result} download="photo.jpg">
            <CloudIcon width={24} height={24} />
          </a>
          <button type="button">
            <ShareIcon width={24} height={24} />
          </button>
          <button type="button" onClick={handleDelete}>
            <DeleteIcon width={24} height={24} />
          </button>
        </div>
      )}
    </ProfileAllGenerationsPhotoModalResultStyles>
  );
};

export default ProfileAllGenerationsPhotoModalResult;
