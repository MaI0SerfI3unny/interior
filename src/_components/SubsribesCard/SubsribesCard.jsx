import clsx from "clsx";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import css from "./SubsribesCard.module.scss";
import { useTranslation } from "react-i18next";

export const SubsribesCard = ({
  plan: { name, price_monthly, features_month, id, price_yearly },
  isSelect,
  handleSelect,
  onSubmit,
  promo,
  usersPlan,
}) => {
  const { t } = useTranslation();

  const buttonText = () => {
    if (usersPlan === name) return t("subscribe.active"); // поточний тариф
    if (name === "Free" && usersPlan) return t("subscribe.limit"); // повернення на Free
    return t("subscribe.submit"); // інші випадки або неавторизований
  };

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
        disabled={usersPlan === name}
      >
        {buttonText()}
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
