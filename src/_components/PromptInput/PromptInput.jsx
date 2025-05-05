import { TextAreaPrompt } from "./PromptInputStyles.styled";
import { useTranslation } from "react-i18next";
import { Field } from "formik";

const PromptInput = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("generate.yourPrompt")}</h2>
      <Field
        as={TextAreaPrompt}
        name="prompt"
        placeholder={t("generate.placeholderPrompt")}
      />
    </div>
  );
};

export default PromptInput;
