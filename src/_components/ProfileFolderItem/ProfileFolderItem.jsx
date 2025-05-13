import { ProfileFolderItemStyles } from "./ProfileFolderItemStyles.styled";

const ProfileFolderItem = ({ photos }) => {
  const [first, second, third] = photos;
  return (
    <ProfileFolderItemStyles>
      <div className={`left ${!first ? "placeholder" : ""}`}>
        {first && <img src={first.result} alt="photo" />}
      </div>
      <div className="right">
        <div className={`top ${!second ? "placeholder" : ""}`}>
          {second && <img src={second.result} alt="photo" />}
        </div>
        <div className={`bottom ${!third ? "placeholder" : ""}`}>
          {third && <img src={third.result} alt="photo" />}
        </div>
      </div>
    </ProfileFolderItemStyles>
  );
};

export default ProfileFolderItem;
