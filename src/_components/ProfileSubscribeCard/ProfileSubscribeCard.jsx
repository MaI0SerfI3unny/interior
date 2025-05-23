import { useTranslation } from "react-i18next";
import { ProfileSubscribeCardStyles } from "./ProfileSubscribeCardStyles.styled";
import { ReactComponent as AcceptIcon } from "../../svg/check-accept.svg";
import { nanoid } from "nanoid";
import { selectUser } from "../../redux/user/selectors";
import { useSelector } from "react-redux";

const ProfileSubscribeCard = ({ cardInfo }) => {
  const { t } = useTranslation();
  const { active_plan } = useSelector(selectUser);

  const { plan, price, privilegies } = cardInfo;
  const isCurrentPlan = active_plan === plan;
  return (
    <ProfileSubscribeCardStyles $isCurrentPlan={isCurrentPlan}>
      <h3>{plan}</h3>
      <p className="price">
        $ {price} <span>/ {t("settings.month")}</span>
      </p>
      <button type="button" disabled={isCurrentPlan} className="plan-btn">
        {isCurrentPlan ? t("settings.currentPlan") : t("settings.getSubscribe")}
      </button>

      <hr />

      <p className="privelegies-title">{t("settings.privelegiesTitle")}</p>
      <ul>
        {privilegies.map(priv => (
          <li key={nanoid()}>
            <AcceptIcon width={20} height={20} /> {t(priv)}
          </li>
        ))}
      </ul>
    </ProfileSubscribeCardStyles>
  );
};

export default ProfileSubscribeCard;
