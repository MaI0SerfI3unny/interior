import { ProfileFolderItemStyles } from "./ProfileFolderItemStyles.styled";

const ProfileFolderItem = ({ photos }) => {
  const [first, second, third] = photos;
  return (
    <ProfileFolderItemStyles>
      <div className={`left ${!first ? "placeholder" : ""}`}>
        {first && (
          <img
            // eslint-disable-next-line no-undef
            src={`${process.env.REACT_APP_IMG_URL}${first.result}`}
            alt="photo"
          />
        )}
      </div>
      <div className="right">
        <div className={`top ${!second ? "placeholder" : ""}`}>
          {second && (
            <img
              // eslint-disable-next-line no-undef
              src={`${process.env.REACT_APP_IMG_URL}${second.result}`}
              alt="photo"
            />
          )}
        </div>
        <div className={`bottom ${!third ? "placeholder" : ""}`}>
          {third && (
            <img
              // eslint-disable-next-line no-undef
              src={`${process.env.REACT_APP_IMG_URL}${third.result}`}
              alt="photo"
            />
          )}
        </div>
      </div>
    </ProfileFolderItemStyles>
  );
};

export default ProfileFolderItem;
