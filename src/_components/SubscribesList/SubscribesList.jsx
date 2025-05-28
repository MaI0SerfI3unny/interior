import { useSelector } from "react-redux";

import { SubsribesCard } from "../SubsribesCard/SubsribesCard.jsx";
import css from "./SubscribesList.module.scss";
import { selectPlans } from "../../redux/plans/slice.js";
import { selectUser } from "../../redux/user/selectors.js";

export const SubscribesList = ({
  selectedPlanId,
  handleSelect,
  onSubmit,
  promo,
}) => {
  const plans = useSelector(selectPlans);

  console.log(plans, "plans");

  const user = useSelector(selectUser);
  const activePlan = user.active_plan?.tariff_name;
  const freeCount = user?.freeCount;

  const usersPlan = !activePlan && freeCount >= 0 ? "Free" : activePlan;
  console.log(usersPlan, "usersPlan");

  console.log(activePlan, "act plan");
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
          usersPlan={usersPlan}
        />
      ))}
    </div>
  ) : null;
};

// [
//   {
//     "id": 4,
//     "name": "Free",
//     "price_monthly": "0.00",
//     "price_yearly": "0.00",
//     "features_month": [
//         "free_generation_10",
//         "queue_waiting",
//         "history_limit_5"
//     ],
//     "features_year": [
//         "free_generation_10",
//         "queue_waiting",
//         "history_limit_5"
//     ]
// },
// {
//     "id": 5,
//     "name": "Premium",
//     "price_monthly": "5.99",
//     "price_yearly": "57.50",
//     "features_month": [
//         "free_generation_100",
//         "no_queue",
//         "commercial_use",
//         "unlimited_history"
//     ],
//     "features_year": [
//         "no_queue",
//         "commercial_use",
//         "unlimited_history",
//         "free_generation_1200"
//     ]
// },
// {
//     "id": 6,
//     "name": "Pro",
//     "price_monthly": "9.99",
//     "price_yearly": "95.90",
//     "features_month": [
//         "no_queue",
//         "commercial_use",
//         "unlimited_history",
//         "unlimited_generation"
//     ],
//     "features_year": [
//         "no_queue",
//         "commercial_use",
//         "unlimited_history",
//         "unlimited_generation"
//     ]
// }
// ]
