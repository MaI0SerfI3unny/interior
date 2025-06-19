import { ProfileGenerationItemStyles } from "./ProfileGenerationItemStyles.styled";
import { ReactComponent as DownloadIcon } from "../../svg/cloud.svg";
import { ReactComponent as MoreInfoIcon } from "../../svg/more-info-photo.svg";
import GeneralModal from "../GeneralModal/GeneralModal";
import { useState } from "react";
import ProfileAllGenerationsPhotoModal from "../ProfileAllGenerationsPhotoModal/ProfileAllGenerationsPhotoModal";

const ProfileGenerationItem = ({ photo }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleDownload(e) {
    e.stopPropagation();
  }

  return (
    <>
      <ProfileGenerationItemStyles onClick={() => setIsOpenModal(true)}>
        <img
          // eslint-disable-next-line no-undef
          src={`${process.env.REACT_APP_IMG_URL}${photo.result}`}
        />
        <button type="button" className="more-info-btn">
          <MoreInfoIcon width={40} height={40} />
        </button>
        <a
          href={photo.result}
          download="photo.jpg"
          className="download-btn"
          onClick={handleDownload}
        >
          <DownloadIcon />
        </a>
      </ProfileGenerationItemStyles>
      {isOpenModal && (
        <GeneralModal toggleModal={() => setIsOpenModal(false)}>
          <ProfileAllGenerationsPhotoModal
            toggleModal={() => setIsOpenModal(false)}
            photo={photo}
          />
        </GeneralModal>
      )}
    </>
  );
};

export default ProfileGenerationItem;
