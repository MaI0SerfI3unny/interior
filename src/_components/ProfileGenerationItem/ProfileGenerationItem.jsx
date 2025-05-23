import { ProfileGenerationItemStyles } from "./ProfileGenerationItemStyles.styled";
// import { ReactComponent as DownloadIcon } from "../../svg/cloud.svg";
import { ReactComponent as MoreInfoIcon } from "../../svg/more-info-photo.svg";
import GeneralModal from "../GeneralModal/GeneralModal";
import { useState } from "react";
import ProfileAllGenerationsPhotoModal from "../ProfileAllGenerationsPhotoModal/ProfileAllGenerationsPhotoModal";
import { ReactComponent as SearchSmallIcon } from "../../svg/search-small.svg";

const ProfileGenerationItem = ({ photo }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // function handleDownload(e) {
  //   e.stopPropagation();
  // }

  return (
    <>
      <ProfileGenerationItemStyles onClick={() => setIsOpenModal(true)}>
        <img src={photo.result} />
        <button type="button" className="more-info-btn">
          <MoreInfoIcon width={40} height={40} />
        </button>
        {/* <a
          href={photo.result}
          download="photo.jpg"
          className="download-btn"
          onClick={handleDownload}
        >
          <DownloadIcon />
        </a> */}
        <div className="overflow">
          <div>
            <p className="overflow-title">Prompt</p>
            <p className="prompt">{photo.prompt}</p>
          </div>
        </div>
        <div className="search-tablet">
          <SearchSmallIcon width={40} height={40} />
        </div>
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
