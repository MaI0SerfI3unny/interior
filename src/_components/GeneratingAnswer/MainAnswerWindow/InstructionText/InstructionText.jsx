import { InstructionTextStyles } from "./InstructionTextStyles.styled";
import { useTranslation } from "react-i18next";

const InstructionText = () => {
  const { t } = useTranslation();
  return (
    <InstructionTextStyles>
      <h2 className="title">INTERIOR AI</h2>
      <p className="instruction-title">{t("generate.mainWindowDesc")}</p>

      <ol className="instruction-list">
        <li>{t("generate.mainWindowAdvance_0")}</li>
        <li> {t("generate.mainWindowAdvance_1")}</li>
        <li>{t("generate.mainWindowAdvance_2")}</li>
      </ol>
    </InstructionTextStyles>
  );
};

export default InstructionText;
