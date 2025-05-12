import { ProfilePageContainer } from "@/_components/ProfilePageContainer/ProfilePageContainer";
import { ProfileNavbar } from "@/_components/ProfileNavbar/ProfileNavbar";
import MainContainer from "../_components/MainContainer/MainContainer";

export const ProfilePagePlan = () => {
  return (
    <ProfilePageContainer>
      <MainContainer>
        <ProfileNavbar />
      </MainContainer>
    </ProfilePageContainer>
  );
};
