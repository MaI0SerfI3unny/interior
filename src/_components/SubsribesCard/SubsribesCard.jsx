import clsx from "clsx";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import css from "./SubsribesCard.module.scss";
import { useTranslation } from "react-i18next";

export const SubsribesCard = ({
  plan: { name, price_monthly, features_month, id },
  isSelect,
  handleSelect,
  onSubmit,
  promo,
  usersPlan,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(css.card, isSelect && css.active)}
      onClick={() => handleSelect(id)}
    >
      <h2 className={css.title}>{t(name)}</h2>
      <div className={css.priceBox}>
        <h2 className={css.price}>$ {t(price_monthly)}</h2>
        <span className={css.priceText}> / {t("subscribe.month")}</span>
      </div>
      <button
        type="button"
        className={clsx(css.btn, usersPlan === name && css.btnDisabled)}
        onClick={() => onSubmit(id, promo)}
      >
        {t("subscribe.submit")}
      </button>
      <div className={css.feautersBox}>
        <p>{t("subscribe.value")}</p>
        {features_month.map((item, idx) => {
          return (
            <div key={idx} className={css.feauter}>
              <Check className={css.icon} />
              <p className={css.feauterItem}>{t(`subscribe.${item}`)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
