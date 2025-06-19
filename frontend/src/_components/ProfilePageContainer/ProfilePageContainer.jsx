import { ProfilePageContainerStyles } from "./ProfilePageContainerStyles.styled";

export const ProfilePageContainer = ({ children }) => {
  return (
    <ProfilePageContainerStyles>
      <div>{children}</div>
    </ProfilePageContainerStyles>
  );
};
