import { ProfileSubscribePaymentHistoryStyles } from "./ProfileSubscribePaymentHistoryStyles.styled";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getPaymentHistory } from "../../redux/user/selectors";
import { convertIsoDate } from "../../assets/functions/convertIsoDate";

const ProfileSubscribePaymentHistory = () => {
  const { t } = useTranslation();
  const paymentData = useSelector(getPaymentHistory);

  return paymentData?.length > 0 ? (
    <ProfileSubscribePaymentHistoryStyles>
      <h2>{t("settings.paymentHistoryTitle")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("settings.paymentDate")}</th>
            <th>{t("settings.subscribeType")}</th>
            <th>{t("settings.price")}</th>
            <th>{t("settings.status")}</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map(({ created_at, tariff, amount, status }) => (
            <tr key={created_at}>
              <td>{convertIsoDate(created_at)}</td>
              <td>{tariff.name}</td>
              <td>
                $ {amount} / {t("settings.shortMonth")}
              </td>
              <td className={status === "success" ? "accepted" : "error"}>
                {status === "success"
                  ? t("settings.acceptPayment")
                  : t("settings.errorPayment")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ProfileSubscribePaymentHistoryStyles>
  ) : (
    <></>
  );
};

export default ProfileSubscribePaymentHistory;
