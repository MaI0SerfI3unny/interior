import { useTranslation } from "react-i18next";
import { ProfileSubscribePaymentDetailsStyles } from "./ProfileSubscribePaymentDetailsStyles.styled";
import { ReactComponent as CardIcon } from "../../svg/mastercard.svg";

// "paymentDetailsTitle": "Payment details",
// "cardNumber": "Card number",
// "subscribeExpires": "Expires",
// "changeCard": "Change"

const ProfileSubscribePaymentDetails = () => {
  const { t } = useTranslation();

  return (
    <ProfileSubscribePaymentDetailsStyles>
      <h2>{t("settings.paymentDetailsTitle")}</h2>
      <div className="payment-container">
        <div>
          <h3>{t("settings.cardNumber")}</h3>
          <div className="card-container">
            <CardIcon width={32} height={32} />
            <p>7390</p>
          </div>
        </div>
        <div>
          <h3>{t("settings.subscribeExpires")}</h3>
          <p>6/28</p>
        </div>
        <button type="button">{t("settings.changeCard")}</button>
      </div>
    </ProfileSubscribePaymentDetailsStyles>
  );
};

export default ProfileSubscribePaymentDetails;
