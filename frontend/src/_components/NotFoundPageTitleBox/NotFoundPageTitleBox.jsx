import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import css from "./NotFoundPageTitleBox.module.scss";

export const NotFoundPageTitleBox = () => {
  const { t } = useTranslation();
  return (
    <div className={css.titleBox}>
      <h1 className={css.title}>404</h1>
      <p className={css.text}>{t("notFound.text")}</p>
      <Link to="/" className={css.btnToHome}>
        {t("notFound.btnBack")}
      </Link>
    </div>
  );
};
