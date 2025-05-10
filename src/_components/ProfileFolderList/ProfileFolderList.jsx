import { ProfileFolderListStyles } from "./ProfileFolderListStyles.styled";
import ProfileFolderWrapper from "../ProfileFolderWrapper/ProfileFolderWrapper";

const ProfileFolderList = ({ folders }) => {
  return (
    <ProfileFolderListStyles>
      {folders.map((folder, index) => (
        <ProfileFolderWrapper key={index} folder={folder} />
      ))}
    </ProfileFolderListStyles>
  );
};

export default ProfileFolderList;
