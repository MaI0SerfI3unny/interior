import { ProfilePageContainer } from "@/_components/ProfilePageContainer/ProfilePageContainer";
import { ProfileNavbar } from "@/_components/ProfileNavbar/ProfileNavbar";
import MainContainer from "../_components/MainContainer/MainContainer";
import ProfileSubscribeContainer from "../_components/ProfileSubscribeContainer/ProfileSubscribeContainer";

export const ProfilePagePlan = () => {
  return (
    <ProfilePageContainer>
      <MainContainer>
        <ProfileNavbar />
        <ProfileSubscribeContainer />
      </MainContainer>
    </ProfilePageContainer>
  );
};
