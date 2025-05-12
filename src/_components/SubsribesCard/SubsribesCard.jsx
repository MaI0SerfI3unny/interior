import clsx from "clsx";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import css from "./SubsribesCard.module.scss";
import { useTranslation } from "react-i18next";

export const SubsribesCard = ({
  plan: { title, price, feauters, id },
  isSelect,
  handleSelect,
  onSubmit,
  promo,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={clsx(css.card, isSelect && css.active)}
      onClick={() => handleSelect(id)}
    >
      <h2 className={css.title}>{t(title)}</h2>
      <div className={css.priceBox}>
        <h2 className={css.price}>$ {t(price)}</h2>
        <span className={css.priceText}> / {t("subscribe.month")}</span>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => onSubmit(id, promo)}
      >
        {t("subscribe.submit")}
      </button>
      <div className={css.feautersBox}>
        <p>{t("subscribe.value")}</p>
        {feauters.map((item, idx) => {
          return (
            <div key={idx} className={css.feauter}>
              <Check />
              <p>{t(item)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
