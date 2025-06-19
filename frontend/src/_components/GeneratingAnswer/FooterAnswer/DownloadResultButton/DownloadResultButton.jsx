import { ReactComponent as CloudIcon } from "../../../../svg/cloud.svg";
import { FooterIconButtonStyles } from "../FooterButtonIconStyles.styled.";
import { toastError } from "../../../../assets/functions/toastNotification";
import { useTranslation } from "react-i18next";

const DownloadResultButton = ({ result }) => {
  const { t } = useTranslation();

  const handleDownload = async () => {
    // eslint-disable-next-line no-undef
    const imageUrl = `${process.env.REACT_APP_IMG_URL}${result.result}`;
    const response = await fetch(imageUrl, { mode: "cors" });

    if (!response.ok) return toastError(t("settings.error"));

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "photo.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <FooterIconButtonStyles onClick={handleDownload}>
      <CloudIcon width={24} height={24} />
    </FooterIconButtonStyles>
  );
};

export default DownloadResultButton;
