import css from "./DecorOr.module.scss";
import { useTranslation } from "react-i18next";

export const DecorOr = () => {
  const { t } = useTranslation();

  return <span className={css.or}>{t("login.decor")}</span>;
};
