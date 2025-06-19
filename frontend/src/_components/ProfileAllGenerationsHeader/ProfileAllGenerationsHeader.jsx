import { ProfileAllGenerationsHeaderStyles } from "./ProfileAllGenerationsHeaderStyles.styled";
import { useTranslation } from "react-i18next";
import { getEndOfWord } from "../../assets/functions/getEndOfWord";

const ProfileAllGenerationsHeader = ({ generationsCount }) => {
  const { t } = useTranslation();
  const generationKey = `modal.${getEndOfWord(generationsCount)}`;
  return (
    <ProfileAllGenerationsHeaderStyles>
      <h2>{t("profile.allGenerations")}</h2>
      <p>
        {generationsCount} {t(generationKey)}{" "}
      </p>
    </ProfileAllGenerationsHeaderStyles>
  );
};

export default ProfileAllGenerationsHeader;
