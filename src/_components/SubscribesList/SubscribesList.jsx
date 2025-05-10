import { subscribes } from "../../mock/subscribes.js";
import { SubsribesCard } from "../SubsribesCard/SubsribesCard.jsx";
import css from "./SubscribesList.module.scss";

export const SubscribesList = ({
  selectedPlanId,
  handleSelect,
  onSubmit,
  promo,
}) => {
  return (
    <div className={css.cardBox}>
      {subscribes.map(item => (
        <SubsribesCard
          key={item.id}
          plan={item}
          isSelect={selectedPlanId === item.id}
          handleSelect={handleSelect}
          onSubmit={onSubmit}
          promo={promo}
        />
      ))}
    </div>
  );
};
