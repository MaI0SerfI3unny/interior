import { ProfileSubscribeCurrentInfoStyles } from "./ProfileSubscribeCurrentInfoStyles.styled";
import { useTranslation } from "react-i18next";
import GeneralModal from "../GeneralModal/GeneralModal";
import { useState } from "react";
import ProfileSubscribeChangePlanModal from "../ProfileSubscribeChangePlanModal/ProfileSubscribeChangePlanModal";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";
import { convertIsoDate } from "../../assets/functions/convertIsoDate";
import { isActivePlan } from "../../assets/functions/isActivePlan";

const ProfileSubscribeCurrentInfo = () => {
  const { t } = useTranslation();
  const [isShowChangeSubscribeModal, setIsShowChangeSubscribeModal] =
    useState(false);
  const { freeCount, active_plan } = useSelector(selectUser);

  const checkActive = isActivePlan(active_plan?.end_date);
  return (
    <ProfileSubscribeCurrentInfoStyles $isActive={checkActive}>
      <h2>{t("settings.subscribeCurrentTitle")}</h2>
      <div className="title-container">
        <h3>{active_plan?.tariff_name}</h3>
        <button
          type="button"
          className="change-btn"
          onClick={() => setIsShowChangeSubscribeModal(true)}
        >
          {t("settings.changePlan")}
        </button>
      </div>
      <div className="info-container">
        <p className="status">
          {active_plan?.tariff_name !== "Free"
            ? `${t("settings.statusActive")} ${convertIsoDate(active_plan?.end_date)}`
            : t("settings.statusFree")}
        </p>
        <p className="generation-count">
          Кількість генерацій:{" "}
          {active_plan?.tariff_name === "Pro"
            ? t("settings.unlimitedCount")
            : freeCount}
        </p>
        <div className="just-for-style"></div>
      </div>

      {isShowChangeSubscribeModal && (
        <GeneralModal toggleModal={setIsShowChangeSubscribeModal}>
          <ProfileSubscribeChangePlanModal
            toggleModal={() => setIsShowChangeSubscribeModal(false)}
          />
        </GeneralModal>
      )}
    </ProfileSubscribeCurrentInfoStyles>
  );
};

export default ProfileSubscribeCurrentInfo;
