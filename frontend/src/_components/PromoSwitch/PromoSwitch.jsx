import { useTranslation } from "react-i18next";
import css from "./PromoSwitch.module.scss";
import clsx from "clsx";

export const PromoSwitch = ({ promo, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className={css.btnContainer}>
      <button
        type="button"
        onClick={onClick}
        className={clsx(css.btn, !promo && css.btnActave)}
      >
        {t("subscribe.btnMonth")}
      </button>
      <button
        type="button"
        onClick={onClick}
        className={clsx(css.btn, promo && css.btnActave)}
      >
        {t("subscribe.btnYear")}
        {" ( "} <p className={css.accent}> -20%</p>
        {")"}
      </button>
    </div>
  );
};
