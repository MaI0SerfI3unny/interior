import { useTranslation } from "react-i18next";
import { LoadingComponentStyles } from "./LoadingComponentStyles.styled";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import loadingPicture from "../../pictures/loading-picture.jpg";

const LoadingComponent = () => {
  const { t } = useTranslation();
  return (
    <LoadingComponentStyles $picture={loadingPicture}>
      <h2>{t("generate.generatingTitle")}</h2>
      <LoadingSpinner width={48} />
    </LoadingComponentStyles>
  );
};

export default LoadingComponent;
