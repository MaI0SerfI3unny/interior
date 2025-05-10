import { useState } from "react";
import { PromoSwitch } from "../_components/PromoSwitch/PromoSwitch.jsx";
import { SubscribePageContainer } from "../_components/SubscribePageContainer/SubscribePageContainer.jsx";
import { SubscribePageTitleBox } from "../_components/SubscribePageTitleBox/SubscribePageTitleBox.jsx";
import { SubscribesList } from "../_components/SubscribesList/SubscribesList.jsx";
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../redux/user/selectors.js";
import { useNavigate } from "react-router-dom";

export const SubscribePage = () => {
  const [promo, setPromo] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState("free");
  const isLoggedIn = useSelector(selectisLoggedIn);
  const navigate = useNavigate();

  const handleSelect = id => {
    setSelectedPlanId(id);
  };

  const switchBtn = () => {
    setPromo(!promo);
  };

  const onSubmit = (id, promo) => {
    console.log(id, "submit id", promo, " promo");
    if (!isLoggedIn) {
      navigate("/signin");
      return;
    }
    // логіка підписки, якщо буде реалізовано на беку
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
