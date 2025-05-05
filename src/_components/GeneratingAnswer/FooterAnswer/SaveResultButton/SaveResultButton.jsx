import { SaveResultButtonStyles } from "./SaveResultButtonStyles.styled";
import { useTranslation } from "react-i18next";

const SaveResultButton = ({ pdS }) => {
  const { t } = useTranslation();
  return (
    <SaveResultButtonStyles $pdS={pdS}>
      {t("generate.save")}
    </SaveResultButtonStyles>
  );
};

export default SaveResultButton;
