import { ProfilePageContainer } from "@/_components/ProfilePageContainer/ProfilePageContainer";
import { ProfileNavbar } from "@/_components/ProfileNavbar/ProfileNavbar";
import { ProfileHeader } from "@/_components/ProfileHeader/ProfileHeader";
import { ProfileFolderList } from "@/_components/ProfileFolderList/ProfileFolderList";
import { ProfileGenerationList } from "@/_components/ProfileGenerationList/ProfileGenerationList";

export const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <ProfileNavbar />
      <ProfileHeader />
      <ProfileFolderList />
      <ProfileGenerationList />
    </ProfilePageContainer>
  );
};
