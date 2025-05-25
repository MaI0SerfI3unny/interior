import { ProfileFolderWrapperStyles } from "./ProfileFolderWrapperStyles.styled";
import ProfileFolderDescription from "../ProfileFolderDescription/ProfileFolderDescription";
import ProfileFolderItem from "../ProfileFolderItem/ProfileFolderItem";

const ProfileFolderWrapper = ({ folder }) => {
  return (
    <ProfileFolderWrapperStyles>
      <ProfileFolderItem photos={folder.photos} />
      <ProfileFolderDescription
        title={folder.title}
        countGenerations={folder.photos.length}
      />
    </ProfileFolderWrapperStyles>
  );
};

export default ProfileFolderWrapper;
