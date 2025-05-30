import { ProfileSubscribeChangePlanModalStyles } from "./ProfileSubscribeChangePlanModalStyles.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useTranslation } from "react-i18next";
import ProfileSubscribeCard from "../ProfileSubscribeCard/ProfileSubscribeCard";

import { useSelector } from "react-redux";

const ProfileSubscribeChangePlanModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const tariffs = useSelector(state => state.plans.plans);

  return (
    <ProfileSubscribeChangePlanModalStyles>
      <CloseModalButton toggleModal={() => toggleModal(false)} />
      <h2>{t("settings.changeSubscribeTitle")}</h2>
      <p className="description">{t("settings.changeSubscribeDescription")}</p>
      <div className="cards-container">
        {tariffs &&
          tariffs.map(
            sub =>
              sub.name !== "Free" && (
                <ProfileSubscribeCard cardInfo={sub} key={sub.id} />
              )
          )}
      </div>

      <button type="button" className="cancel-btn">
        {t("settings.cancelSubscribe")}
      </button>
    </ProfileSubscribeChangePlanModalStyles>
  );
};

export default ProfileSubscribeChangePlanModal;
