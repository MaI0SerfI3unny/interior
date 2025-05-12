import { ProfileGenerationItemStyles } from "./ProfileGenerationItemStyles.styled";
import { ReactComponent as DownloadIcon } from "../../svg/cloud.svg";
import { ReactComponent as MoreInfoIcon } from "../../svg/more-info-photo.svg";

const ProfileGenerationItem = ({ photo }) => {
  return (
    <ProfileGenerationItemStyles>
      <img src={photo.photo} />
      <button type="button" className="more-info-btn">
        <MoreInfoIcon width={40} height={40} />
      </button>
      <button type="button" className="download-btn">
        <DownloadIcon />
      </button>
    </ProfileGenerationItemStyles>
  );
};

export default ProfileGenerationItem;
