import { ProfileAllGenerationsContainerStyles } from "./ProfileAllGenerationsContainerStyles.styled";
import ProfileAllGenerationsHeader from "../ProfileAllGenerationsHeader/ProfileAllGenerationsHeader";
import { ProfileAllGenerationList } from "../ProfileAllGenerationList/ProfileAllGenerationList";

const ProfileAllGenerationsContainer = ({ folders, handleDeletePhoto }) => {
  const photos = folders.reduce((acc, folder) => {
    return [...acc, ...folder.photos];
  }, []);

  return (
    <ProfileAllGenerationsContainerStyles>
      <ProfileAllGenerationsHeader generationsCount={photos.length} />
      <ProfileAllGenerationList
        photos={photos}
        handleDeletePhoto={handleDeletePhoto}
      />
    </ProfileAllGenerationsContainerStyles>
  );
};

export default ProfileAllGenerationsContainer;
