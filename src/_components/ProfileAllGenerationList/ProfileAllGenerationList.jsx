import { ProfileAllGenerationListStyles } from "./ProfileAllGenerationListStyles.styled";
import ProfileGenerationItem from "../ProfileGenerationItem/ProfileGenerationItem";

export const ProfileAllGenerationList = ({ photos, handleDeletePhoto }) => {
  return (
    <ProfileAllGenerationListStyles>
      {photos.map(photo => (
        <ProfileGenerationItem
          photo={photo}
          key={photo.id}
          handleDeletePhoto={handleDeletePhoto}
        />
      ))}
    </ProfileAllGenerationListStyles>
  );
};
