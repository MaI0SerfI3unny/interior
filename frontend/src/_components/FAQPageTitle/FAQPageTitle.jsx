import css from "./FAQPageTitle.module.scss";
import { useTranslation } from "react-i18next";

export const FAQPageTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={css.titleContainer}>
      <h1 className={css.title}>{t("faq.title")}</h1>
      <p className={css.text}>{t("faq.desc")}</p>
    </div>
  );
};
