import { ProfileFolderItemStyles } from "./ProfileFolderItemStyles.styled";

const ProfileFolderItem = ({ photos }) => {
  const [first, second, third] = photos;
  return (
    <ProfileFolderItemStyles>
      <div className={`left ${!first ? "placeholder" : ""}`}>
        {first && <img src={first.photo} alt="photo" />}
      </div>
      <div className="right">
        <div className={`top ${!second ? "placeholder" : ""}`}>
          {second && <img src={second.photo} alt="photo" />}
        </div>
        <div className={`bottom ${!third ? "placeholder" : ""}`}>
          {third && <img src={third.photo} alt="photo" />}
        </div>
      </div>
    </ProfileFolderItemStyles>
  );
};

export default ProfileFolderItem;
