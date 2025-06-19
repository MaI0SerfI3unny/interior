import { useTranslation } from "react-i18next";
import { ProfileSubscribeCardStyles } from "./ProfileSubscribeCardStyles.styled";
import { ReactComponent as AcceptIcon } from "../../svg/check-accept.svg";
import { selectUser } from "../../redux/user/selectors";
import { useSelector } from "react-redux";
import { toastError } from "../../assets/functions/toastNotification";
import api from "../../api/axios.config";

const ProfileSubscribeCard = ({ cardInfo }) => {
  const { t } = useTranslation();
  const { active_plan } = useSelector(selectUser);

  const handleSubscribeClick = async () => {
    try {
      const { data } = await api.post("tariffs/create", {
        tariff_id: cardInfo.id,
        subscription_type: "month",
      });

      window.open(data.checkout_url, "_blank", "noopener,noreferrer");
    } catch (error) {
      toastError(t("settings.error"));
    }
  };

  const { name, price_monthly, features_month } = cardInfo;
  const isCurrentPlan = active_plan.tariff_name === name;

  return (
    <ProfileSubscribeCardStyles $isCurrentPlan={isCurrentPlan}>
      <h3>{name}</h3>
      <p className="price">
        $ {price_monthly} <span>/ {t("settings.month")}</span>
      </p>
      <button
        type="button"
        disabled={isCurrentPlan}
        className="plan-btn"
        onClick={handleSubscribeClick}
      >
        {isCurrentPlan ? t("settings.currentPlan") : t("settings.getSubscribe")}
      </button>

      <hr />

      <p className="privelegies-title">{t("settings.privelegiesTitle")}</p>
      <ul>
        {features_month.map((priv, i) => (
          <li key={i}>
            <AcceptIcon width={20} height={20} /> {t(`subscribe.${priv}`)}
          </li>
        ))}
      </ul>
    </ProfileSubscribeCardStyles>
  );
};

export default ProfileSubscribeCard;
