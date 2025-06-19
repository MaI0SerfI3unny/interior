import { useTranslation } from "react-i18next";
import css from "./SubscribePageTitleBox.module.scss";

export const SubscribePageTitleBox = () => {
  const { t } = useTranslation();
  return (
    <div className={css.titleBox}>
      <h1 className={css.title}>{t("subscribe.pageTitle")}</h1>
      <p className={css.info}>{t("subscribe.info")}</p>
    </div>
  );
};
