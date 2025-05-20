import ProfileSubscribeCurrentInfo from "../ProfileSubscribeCurrentInfo/ProfileSubscribeCurrentInfo";
import ProfileSubscribePaymentDetails from "../ProfileSubscribePaymentDetails/ProfileSubscribePaymentDetails";
import { ProfileSubscribeContainerStyles } from "./ProfileSubscribeContainerStyles.styled";
import ProfileSubscribePaymentHistory from "../ProfileSubscribePaymentHistory/ProfileSubscribePaymentHistory";

const ProfileSubscribeContainer = () => {
  return (
    <ProfileSubscribeContainerStyles>
      <ProfileSubscribeCurrentInfo />
      <ProfileSubscribePaymentDetails />
      <ProfileSubscribePaymentHistory />
    </ProfileSubscribeContainerStyles>
  );
};

export default ProfileSubscribeContainer;
