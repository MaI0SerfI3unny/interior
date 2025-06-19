import { ProfileGenerationsEmptyGenerationsStyles } from "./ProfileGenerationsEmptyGenerationsStyles.styled";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProfileGenerationsEmptyGenerations = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function handlerGoToGeneration() {
    navigate("/generating");
  }
  return (
    <ProfileGenerationsEmptyGenerationsStyles>
      <p>{t("profile.emptyMessage")}</p>
      <button type="button" onClick={handlerGoToGeneration}>
        {t("profile.goToGenerations")}
      </button>
    </ProfileGenerationsEmptyGenerationsStyles>
  );
};

export default ProfileGenerationsEmptyGenerations;
