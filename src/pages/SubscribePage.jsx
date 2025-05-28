import { useState } from "react";
import { PromoSwitch } from "../_components/PromoSwitch/PromoSwitch.jsx";
import { SubscribePageContainer } from "../_components/SubscribePageContainer/SubscribePageContainer.jsx";
import { SubscribePageTitleBox } from "../_components/SubscribePageTitleBox/SubscribePageTitleBox.jsx";
import { SubscribesList } from "../_components/SubscribesList/SubscribesList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectisLoggedIn } from "../redux/user/selectors.js";
import { useNavigate } from "react-router-dom";
import { getLiqPayUrl } from "../redux/user/operations.js";
import { toastError } from "../assets/functions/toastNotification.js";
import { useTranslation } from "react-i18next";

export const SubscribePage = () => {
  const [promo, setPromo] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(0);
  const isLoggedIn = useSelector(selectisLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSelect = id => {
    setSelectedPlanId(id);
  };

  const switchBtn = () => {
    setPromo(!promo);
  };

  const onSubmit = async (id, promo) => {
    if (!isLoggedIn) {
      navigate("/signin");
      return;
    }

    try {
      const { checkout_url } = await dispatch(
        getLiqPayUrl({
          tariff_id: id,
          subscription_type: promo ? "year" : "month",
        })
      ).unwrap();

      window.open(checkout_url, "_blank");
    } catch (error) {
      toastError(t("auth.somethingWentWrong"));
    }
  };

  return (
    <SubscribePageContainer>
      <SubscribePageTitleBox />
      <PromoSwitch promo={promo} onClick={switchBtn} />
      <SubscribesList
        selectedPlanId={selectedPlanId}
        handleSelect={handleSelect}
        onSubmit={onSubmit}
        promo={promo}
      />
    </SubscribePageContainer>
  );
};
