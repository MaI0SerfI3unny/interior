import { useSelector } from "react-redux";

import { SubsribesCard } from "../SubsribesCard/SubsribesCard.jsx";
import css from "./SubscribesList.module.scss";

import { selectUser } from "../../redux/user/selectors.js";

export const SubscribesList = ({
  selectedPlanId,
  handleSelect,
  onSubmit,
  promo,
  plans,
}) => {
  const user = useSelector(selectUser);
  const activePlan = user.active_plan?.tariff_name;

  return plans.length > 0 ? (
    <div className={css.cardBox}>
      {plans.map(item => (
        <SubsribesCard
          key={item.id}
          plan={item}
          isSelect={selectedPlanId === item.id}
          handleSelect={handleSelect}
          onSubmit={onSubmit}
          promo={promo}
          usersPlan={activePlan}
        />
      ))}
    </div>
  ) : null;
};
