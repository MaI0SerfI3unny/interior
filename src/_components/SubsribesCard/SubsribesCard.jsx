import clsx from "clsx";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import css from "./SubsribesCard.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const SubsribesCard = ({
  plan: {
    name,
    price_monthly,
    features_month,
    features_year,
    id,
    price_yearly,
  },
  isSelect,
  handleSelect,
  onSubmit,
  promo,
  usersPlan,
}) => {
  const { t } = useTranslation();
  const [currentFeatures, setCurrentFeatures] = useState(features_month);

  const buttonText = () => {
    if (usersPlan === name) return t("subscribe.active"); // поточний тариф
    if (name === "Free" && usersPlan) return t("subscribe.limit"); // повернення на Free
    if (name === "Free" && !usersPlan) return t("subscribe.free");
    return t("subscribe.submit"); // інші випадки або неавторизований
  };

  useEffect(() => {
    promo
      ? setCurrentFeatures(features_year)
      : setCurrentFeatures(features_month);
  }, [promo]);

  return (
    <div
      className={clsx(css.card, isSelect && css.active)}
      onClick={() => handleSelect(id)}
    >
      <h2 className={css.title}>{t(name)}</h2>
      <div className={css.priceBox}>
        <h2 className={css.price}>
          $ {promo ? t(price_yearly) : t(price_monthly)}
        </h2>
        <span className={css.priceText}>
          {" "}
          / {promo ? t("subscribe.year") : t("subscribe.month")}
        </span>
      </div>

      <button
        type="button"
        className={clsx(
          css.btn,
          usersPlan === name && css.btnDisabled,
          name === "Free" &&
            usersPlan !== "Free" &&
            usersPlan &&
            css.btnDisabled
        )}
        onClick={() => onSubmit(id, promo)}
        disabled={
          usersPlan === name || (name === "Free" && usersPlan !== "Free")
        }
      >
        {buttonText()}
      </button>

      <div className={css.feautersBox}>
        <p>{t("subscribe.value")}</p>
        {currentFeatures.map((item, idx) => {
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
