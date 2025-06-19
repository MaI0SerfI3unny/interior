import { ProfileSubscribeChangePlanModalStyles } from "./ProfileSubscribeChangePlanModalStyles.styled";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import { useTranslation } from "react-i18next";
import ProfileSubscribeCard from "../ProfileSubscribeCard/ProfileSubscribeCard";
import api from "../../api/axios.config";
import { getUser } from "../../redux/user/operations";
import SmallSpinner from "../SmallSpinner/SmallSpinner";

import { useDispatch, useSelector } from "react-redux";
import { selectPlans } from "../../redux/plans/slice";
import { selectUser } from "../../redux/user/selectors";
import { useState } from "react";
import {
  toastError,
  toastSuccess,
} from "../../assets/functions/toastNotification";

const ProfileSubscribeChangePlanModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const tariffs = useSelector(selectPlans);
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function deleteTariff() {
    setIsLoading(true);
    try {
      await api.delete("/tariffs/delete");
      await dispatch(getUser());
      toastSuccess(t("settings.deletedTariff"));
      toggleModal(false);
    } catch (error) {
      toastError(t("settings.error"));
    } finally {
      setIsLoading(false);
    }
  }

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

      {user?.active_plan?.tariff_name !== "Free" && (
        <button
          type="button"
          className="cancel-btn"
          disabled={isLoading}
          onClick={deleteTariff}
        >
          {isLoading ? <SmallSpinner /> : t("settings.cancelSubscribe")}
        </button>
      )}
    </ProfileSubscribeChangePlanModalStyles>
  );
};

export default ProfileSubscribeChangePlanModal;
