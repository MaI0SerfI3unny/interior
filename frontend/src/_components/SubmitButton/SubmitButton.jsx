import { SubmitButtonStyles } from "./SubmitButtonStyles.styled";
import { useTranslation } from "react-i18next";
import { ReactComponent as GenerateIcon } from "../../svg/sparkles.svg";

const SubmitButton = ({ disabled }) => {
  const { t } = useTranslation();
  return (
    <SubmitButtonStyles type="submit" disabled={disabled}>
      {t("generate.btnGenerate")}
      <GenerateIcon width={24} height={24} />
    </SubmitButtonStyles>
  );
};

export default SubmitButton;
