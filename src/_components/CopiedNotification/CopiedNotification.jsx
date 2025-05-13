import { CopiedNotificationStyles } from "./CopiedNotificationStyles.styled";
import { useTranslation } from "react-i18next";
const CopiedNotification = () => {
  const { t } = useTranslation();
  return (
    <CopiedNotificationStyles>{t("settings.copied")}</CopiedNotificationStyles>
  );
};

export default CopiedNotification;
