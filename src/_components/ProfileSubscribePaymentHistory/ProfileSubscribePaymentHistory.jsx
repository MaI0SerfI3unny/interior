import { ProfileSubscribePaymentHistoryStyles } from "./ProfileSubscribePaymentHistoryStyles.styled";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getPaymentHistory } from "../../redux/user/selectors";
import { convertIsoDate } from "../../assets/functions/convertIsoDate";
// const paymentData = [
//   {
//     id: 1,
//     date: "20.20.2020",
//     type: "Premium",
//     price: "5.99",
//     status: true,
//   },
//   {
//     id: 2,
//     date: "21.21.2021",
//     type: "Pro",
//     price: "9.99",
//     status: true,
//   },
//   {
//     id: 3,
//     date: "22.22.2022",
//     type: "Premium",
//     price: "5.99",
//     status: false,
//   },
//   {
//     id: 4,
//     date: "23.23.2023",
//     type: "Pro",
//     price: "9.99",
//     status: false,
//   },
// ];

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
