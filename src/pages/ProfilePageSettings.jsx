import { ProfilePageContainer } from "@/_components/ProfilePageContainer/ProfilePageContainer";
import { ProfileNavbar } from "@/_components/ProfileNavbar/ProfileNavbar";
import ProfileSettingsAvatarContainer from "../_components/ProfileSettingsAvatarContainer/ProfileSettingsAvatarContainer";
import MainContainer from "../_components/MainContainer/MainContainer";
import ProfileSettingsForm from "../_components/ProfileSettingsForm/ProfileSettingsForm";

export const ProfilePageSettings = () => {
  return (
    <ProfilePageContainer>
      <MainContainer>
        <ProfileNavbar />
        <ProfileSettingsAvatarContainer />
        <ProfileSettingsForm />
      </MainContainer>
    </ProfilePageContainer>
  );
};
