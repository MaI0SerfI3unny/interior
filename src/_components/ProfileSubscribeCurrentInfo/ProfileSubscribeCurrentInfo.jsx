import { ProfileSubscribeCurrentInfoStyles } from "./ProfileSubscribeCurrentInfoStyles.styled";
import { useTranslation } from "react-i18next";
import GeneralModal from "../GeneralModal/GeneralModal";
import { useState } from "react";
import ProfileSubscribeChangePlanModal from "../ProfileSubscribeChangePlanModal/ProfileSubscribeChangePlanModal";

const ProfileSubscribeCurrentInfo = () => {
  const { t } = useTranslation();
  const [isShowChangeSubscribeModal, setIsShowChangeSubscribeModal] =
    useState(false);
  return (
    <ProfileSubscribeCurrentInfoStyles>
      <h2>{t("settings.subscribeCurrentTitle")}</h2>
      <h3>PREMIUM</h3>
      <button
        type="button"
        className="change-btn"
        onClick={() => setIsShowChangeSubscribeModal(true)}
      >
        {t("settings.changePlan")}
      </button>
      <div className="main-container">
        <div className="info-container">
          <div>
            <h4>{t("settings.status")}</h4>
            <p className="status">{t("settings.statusActive")}</p>
          </div>
          <div>
            <h4>{t("settings.price")}</h4>
            <p>$ 5.99 / {t("settings.month")}</p>
          </div>
          <div>
            <h4>{t("settings.endSubscribe")}</h4>
            <p>20.05.2025</p>
          </div>
        </div>
        <button type="button" className="cancel-btn">
          {t("settings.cancelSubscribe")}
        </button>
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
