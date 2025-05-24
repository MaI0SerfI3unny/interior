import { ProfileSubscribeChangePlanModalStyles } from "./ProfileSubscribeChangePlanModalStyles.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useTranslation } from "react-i18next";
import ProfileSubscribeCard from "../ProfileSubscribeCard/ProfileSubscribeCard";
import { useEffect, useState } from "react";
import api from "../../api/axios.config";
import { toastError } from "../../assets/functions/toastNotification";

const proDescription = [
  "settings.subs.pro.unlimited_gen",
  "settings.subs.shared.queue",
  "settings.subs.shared.limited_access",
  "settings.subs.shared.non_commercial",
];

const premiumDescription = [
  "settings.subs.premium.gen_limit",
  "settings.subs.shared.queue",
  "settings.subs.shared.limited_access",
  "settings.subs.shared.non_commercial",
];

const ProfileSubscribeChangePlanModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const [tariffs, setTariffs] = useState(null);

  useEffect(() => {
    async function getTariffs() {
      try {
        const { data } = await api.get("/tariffs");
        const updatedData = data.map(sub => ({
          ...sub,
          privilegies:
            sub.name === "Pro"
              ? proDescription
              : sub.name === "Premium"
                ? premiumDescription
                : [],
        }));
        setTariffs(updatedData);
      } catch (error) {
        toastError(t("settings.error"));
        toggleModal(false);
      }
    }

    getTariffs();
  }, []);

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
