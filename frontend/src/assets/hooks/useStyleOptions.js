import { useTranslation } from "react-i18next";

export const useStyleOptions = () => {
  const { t } = useTranslation();

  return [
    { label: t("generate.stylesList.classic"), value: "classic" },
    { label: t("generate.stylesList.minimal"), value: "minimal" },
    { label: t("generate.stylesList.contemporary"), value: "contemporary" },
    { label: t("generate.stylesList.vintage"), value: "vintage" },
    { label: t("generate.stylesList.modern"), value: "modern" },
    { label: t("generate.stylesList.industrial"), value: "industrial" },
    { label: t("generate.stylesList.scandinavian"), value: "scandinavian" },
    { label: t("generate.stylesList.hi-tech"), value: "hi-tech" },
    { label: t("generate.stylesList.loft"), value: "loft" },
    { label: t("generate.stylesList.provence"), value: "provence" },
  ];
};
