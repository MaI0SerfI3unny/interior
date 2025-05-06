import { SaveResultButtonStyles } from "./SaveResultButtonStyles.styled";
import { useTranslation } from "react-i18next";

const SaveResultButton = ({ pdS, toggleModal }) => {
  const { t } = useTranslation();

  return (
    <SaveResultButtonStyles $pdS={pdS} onClick={() => toggleModal(true)}>
      {t("generate.save")}
    </SaveResultButtonStyles>
  );
};

export default SaveResultButton;
