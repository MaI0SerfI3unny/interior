import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import css from "./ButtonBack.module.scss";
import { useTranslation } from "react-i18next";

export const ButtonBack = ({ path }) => {
  const { t } = useTranslation();

  return (
    <Link className={css.arrowBack} to={path}>
      <Arrow />
      <span>{t("login.buttonBack")}</span>
    </Link>
  );
};
