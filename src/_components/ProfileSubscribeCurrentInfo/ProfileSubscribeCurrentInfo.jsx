import { ProfileSubscribeCurrentInfoStyles } from "./ProfileSubscribeCurrentInfoStyles.styled";
import { useTranslation } from "react-i18next";
import GeneralModal from "../GeneralModal/GeneralModal";
import { useState } from "react";
import ProfileSubscribeChangePlanModal from "../ProfileSubscribeChangePlanModal/ProfileSubscribeChangePlanModal";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";

const ProfileSubscribeCurrentInfo = () => {
  const { t } = useTranslation();
  const [isShowChangeSubscribeModal, setIsShowChangeSubscribeModal] =
    useState(false);
  const { freeCount } = useSelector(selectUser);
  return (
    <ProfileSubscribeCurrentInfoStyles>
      <h2>{t("settings.subscribeCurrentTitle")}</h2>
      <div className="title-container">
        <h3>PREMIUM</h3>
        <button
          type="button"
          className="change-btn"
          onClick={() => setIsShowChangeSubscribeModal(true)}
        >
          {t("settings.changePlan")}
        </button>
      </div>
      <div className="info-container">
        <p className="status">{t("settings.statusActive")} 20.05.1015</p>
        <p className="generation-count">Кількість генерацій: {freeCount}</p>
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
