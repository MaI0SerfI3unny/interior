import { ProfileFolderListContainerStyles } from "./ProfileFolderListContainerStyles.styled";
import ProfileFolderList from "../ProfileFolderList/ProfileFolderList";
import { useTranslation } from "react-i18next";

export const ProfileFolderListContainer = ({ folders }) => {
  const { t } = useTranslation();
  return (
    <ProfileFolderListContainerStyles>
      <h2>{t("profile.yourFolders")}</h2>
      <ProfileFolderList folders={folders} />
    </ProfileFolderListContainerStyles>
  );
};
