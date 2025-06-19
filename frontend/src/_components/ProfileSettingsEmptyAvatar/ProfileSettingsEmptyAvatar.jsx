import { ProfileSettingsEmptyAvatarStyles } from "./ProfileSettingsEmptyAvatarStyles.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";

const ProfileSettingsEmptyAvatar = () => {
  const { name } = useSelector(selectUser);

  return (
    <ProfileSettingsEmptyAvatarStyles>
      <p>{name[0]}</p>
    </ProfileSettingsEmptyAvatarStyles>
  );
};

export default ProfileSettingsEmptyAvatar;
