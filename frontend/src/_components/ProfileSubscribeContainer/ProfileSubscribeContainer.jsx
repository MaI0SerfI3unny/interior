import ProfileSubscribeCurrentInfo from "../ProfileSubscribeCurrentInfo/ProfileSubscribeCurrentInfo";
import { ProfileSubscribeContainerStyles } from "./ProfileSubscribeContainerStyles.styled";
import ProfileSubscribePaymentHistory from "../ProfileSubscribePaymentHistory/ProfileSubscribePaymentHistory";

const ProfileSubscribeContainer = () => {
  return (
    <ProfileSubscribeContainerStyles>
      <ProfileSubscribeCurrentInfo />
      <ProfileSubscribePaymentHistory />
    </ProfileSubscribeContainerStyles>
  );
};

export default ProfileSubscribeContainer;
