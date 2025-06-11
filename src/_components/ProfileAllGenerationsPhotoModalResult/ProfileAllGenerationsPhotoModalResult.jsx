import { ProfileAllGenerationsPhotoModalResultStyles } from "./ProfileAllGenerationsPhotoModalResultStyles.styled";
import { ReactComponent as CloudIcon } from "../../svg/cloud.svg";
import { ReactComponent as DeleteIcon } from "../../svg/cart.svg";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { deletePhotoById } from "../../redux/generationFolders/generationFoldersOperations";
import { useSelector } from "react-redux";
import { getGenerationFolders } from "../../redux/generationFolders/generationFoldersSelectors";
import { useState } from "react";
import SmallSpinner from "../SmallSpinner/SmallSpinner";
import { toastError } from "../../assets/functions/toastNotification";

const ProfileAllGenerationsPhotoModalResult = ({ photo, toggleModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const folders = useSelector(getGenerationFolders);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    setIsLoading(true);
    const { id } = folders.find(fold =>
      fold.photos.some(pict => pict.id === photo.id)
    );

    await dispatch(
      deletePhotoById({
        photoId: photo.id,
        folderId: id,
        errorMsg: t("settings.error"),
        successMsg: t("settings.photoDeleted"),
      })
    );
    setIsLoading(false);
    toggleModal();
  }

  const handleDownload = async () => {
    // eslint-disable-next-line no-undef
    const imageUrl = `${process.env.REACT_APP_IMG_URL}${photo.result}`;
    const response = await fetch(imageUrl, { mode: "cors" });

    if (!response.ok) return toastError(t("settings.error"));

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "photo.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const isProfilePage = location.pathname === "/profile/main";

  return (
    <ProfileAllGenerationsPhotoModalResultStyles $isDeleting={isLoading}>
      <img
        src={
          isProfilePage
            ? // eslint-disable-next-line no-undef
              `${process.env.REACT_APP_IMG_URL}${photo.result}`
            : photo.result
        }
        alt="result"
      />
      {isProfilePage && (
        <div className="btns-container">
          <button onClick={handleDownload}>
            <CloudIcon width={24} height={24} />
          </button>
          <button type="button" onClick={handleDelete} className="delete-btn">
            {isLoading ? (
              <SmallSpinner />
            ) : (
              <DeleteIcon width={24} height={24} />
            )}
          </button>
        </div>
      )}
    </ProfileAllGenerationsPhotoModalResultStyles>
  );
};

export default ProfileAllGenerationsPhotoModalResult;
