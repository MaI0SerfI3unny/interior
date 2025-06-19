import { ProfileFolderDescriptionStyles } from "./ProfileFolderDescriptionStyles.styled";
import { useTranslation } from "react-i18next";
import { getEndOfWord } from "../../assets/functions/getEndOfWord";

const ProfileFolderDescription = ({ title, countGenerations }) => {
  const { t } = useTranslation();

  const generationKey = `modal.${getEndOfWord(countGenerations)}`;

  return (
    <ProfileFolderDescriptionStyles>
      <h3>{title}</h3>
      <p>
        {`${countGenerations} `}
        {t(generationKey)}
      </p>
    </ProfileFolderDescriptionStyles>
  );
};

export default ProfileFolderDescription;
