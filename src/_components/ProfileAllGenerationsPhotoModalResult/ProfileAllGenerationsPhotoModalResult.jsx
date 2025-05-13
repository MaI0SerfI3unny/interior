import { ProfileAllGenerationsPhotoModalResultStyles } from "./ProfileAllGenerationsPhotoModalResultStyles.styled";
import { ReactComponent as CloudIcon } from "../../svg/cloud.svg";
import { ReactComponent as ShareIcon } from "../../svg/share.svg";
import { ReactComponent as DeleteIcon } from "../../svg/cart.svg";
import { useDispatch } from "react-redux";
import { deletePhoto } from "../../redux/generationFolders/generationFoldersSlice";

const ProfileAllGenerationsPhotoModalResult = ({
  photo,
  setIsDeleting,
  toggleModal,
}) => {
  const dispatch = useDispatch();

  function handleDelete() {
    setIsDeleting(true);
    setTimeout(() => {
      dispatch(deletePhoto({ photoId: photo.id }));
      toggleModal();
    }, 3000);
  }

  return (
    <ProfileAllGenerationsPhotoModalResultStyles>
      <img src={photo.result} alt="result" />
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
    </ProfileAllGenerationsPhotoModalResultStyles>
  );
};

export default ProfileAllGenerationsPhotoModalResult;
