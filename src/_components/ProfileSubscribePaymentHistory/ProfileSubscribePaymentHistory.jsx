import { ProfileSubscribePaymentHistoryStyles } from "./ProfileSubscribePaymentHistoryStyles.styled";
import { useTranslation } from "react-i18next";
import { ReactComponent as DownloadIcon } from "../../svg/cloud.svg";

const paymentData = [
  {
    id: 1,
    date: "20.20.2020",
    type: "Premium",
    price: "5.99",
    status: true,
  },
  {
    id: 2,
    date: "21.21.2021",
    type: "Pro",
    price: "9.99",
    status: true,
  },
  {
    id: 3,
    date: "22.22.2022",
    type: "Premium",
    price: "5.99",
    status: false,
  },
  {
    id: 4,
    date: "23.23.2023",
    type: "Pro",
    price: "9.99",
    status: false,
  },
];

const ProfileSubscribePaymentHistory = () => {
  const { t } = useTranslation();
  return (
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
          {paymentData.map(({ id, date, type, price, status }) => (
            <tr key={id}>
              <td>{date}</td>
              <td>{type}</td>
              <td>
                $ {price} / {t("settings.shortMonth")}
              </td>
              <td className={status ? "accepted" : "error"}>
                {status
                  ? t("settings.acceptPayment")
                  : t("settings.errorPayment")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ProfileSubscribePaymentHistoryStyles>
  );
};

export default ProfileSubscribePaymentHistory;
