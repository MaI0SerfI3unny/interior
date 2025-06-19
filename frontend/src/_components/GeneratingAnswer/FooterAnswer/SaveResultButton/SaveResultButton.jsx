import { SaveResultButtonStyles } from "./SaveResultButtonStyles.styled";
import { useTranslation } from "react-i18next";
import SmallSpinner from "../../../SmallSpinner/SmallSpinner";

const SaveResultButton = ({ pdS, toggleModal, isDisabled, wD, isLoading }) => {
  const { t } = useTranslation();

  return (
    <SaveResultButtonStyles
      disabled={isDisabled}
      $pdS={pdS}
      onClick={toggleModal}
      $wD={wD}
    >
      {isLoading ? <SmallSpinner /> : t("generate.save")}
    </SaveResultButtonStyles>
  );
};

export default SaveResultButton;
