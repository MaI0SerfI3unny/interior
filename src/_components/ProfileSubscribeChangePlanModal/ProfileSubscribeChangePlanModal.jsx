import { ProfileSubscribeChangePlanModalStyles } from "./ProfileSubscribeChangePlanModalStyles.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useTranslation } from "react-i18next";
import ProfileSubscribeCard from "../ProfileSubscribeCard/ProfileSubscribeCard";
import { subscriptions } from "../../assets/constants/subscribtions";

const ProfileSubscribeChangePlanModal = ({ toggleModal }) => {
  const { t } = useTranslation();

  return (
    <ProfileSubscribeChangePlanModalStyles>
      <CloseModalButton toggleModal={toggleModal} />
      <h2>{t("settings.changeSubscribeTitle")}</h2>
      <p className="description">{t("settings.changeSubscribeDescription")}</p>
      <div className="cards-container">
        {subscriptions.map(sub => (
          <ProfileSubscribeCard cardInfo={sub} key={sub.plan} />
        ))}
      </div>

      <button type="button" className="cancel-btn">
        {t("settings.cancelSubscribe")}
      </button>
    </ProfileSubscribeChangePlanModalStyles>
  );
};

export default ProfileSubscribeChangePlanModal;
