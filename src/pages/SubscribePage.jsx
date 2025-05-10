import { useState } from "react";
import { PromoSwitch } from "../_components/PromoSwitch/PromoSwitch.jsx";
import { SubscribePageContainer } from "../_components/SubscribePageContainer/SubscribePageContainer.jsx";
import { SubscribePageTitleBox } from "../_components/SubscribePageTitleBox/SubscribePageTitleBox.jsx";
import { SubscribesList } from "../_components/SubscribesList/SubscribesList.jsx";

export const SubscribePage = () => {
  const [promo, setPromo] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  console.log(selectedPlanId, "selectedPlanId");

  const handleSelect = id => {
    setSelectedPlanId(id);
  };

  const switchBtn = () => {
    setPromo(!promo);
  };

  return (
    <SubscribePageContainer>
      <SubscribePageTitleBox />
      <PromoSwitch promo={promo} onClick={switchBtn} />
      <SubscribesList
        selectedPlanId={selectedPlanId}
        handleSelect={handleSelect}
      />
    </SubscribePageContainer>
  );
};
