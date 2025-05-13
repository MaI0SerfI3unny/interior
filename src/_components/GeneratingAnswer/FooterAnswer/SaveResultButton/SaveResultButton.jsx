import { SaveResultButtonStyles } from "./SaveResultButtonStyles.styled";
import { useTranslation } from "react-i18next";

const SaveResultButton = ({ pdS, toggleModal, isDisabled, wD }) => {
  const { t } = useTranslation();

  return (
    <SaveResultButtonStyles
      disabled={isDisabled}
      $pdS={pdS}
      onClick={toggleModal}
      $wD={wD}
    >
      {t("generate.save")}
    </SaveResultButtonStyles>
  );
};

export default SaveResultButton;
