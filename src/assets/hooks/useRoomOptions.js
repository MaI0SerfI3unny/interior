import { useTranslation } from "react-i18next";

export const useRoomOptions = () => {
  const { t } = useTranslation();

  return [
    { label: t("generate.roomsList.kitchen"), value: "kitchen" },
    { label: t("generate.roomsList.studio"), value: "studio" },
    { label: t("generate.roomsList.livingRoom"), value: "living-room" },
    { label: t("generate.roomsList.bathRoom"), value: "bathroom" },
    { label: t("generate.roomsList.bedRoom"), value: "bedroom" },
  ];
};
