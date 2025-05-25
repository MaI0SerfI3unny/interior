import { UpgradeButtonStyles } from "./UpgradeButtonStyles.styled";
import { useTranslation } from "react-i18next";

const UpgradeButton = () => {
  const { t } = useTranslation();
  return <UpgradeButtonStyles>{t("generate.btnUpgrade")}</UpgradeButtonStyles>;
};

export default UpgradeButton;
