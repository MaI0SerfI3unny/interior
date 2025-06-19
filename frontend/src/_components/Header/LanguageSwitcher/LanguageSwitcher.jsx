import { useTranslation } from "react-i18next";
import style from "./style.module.scss";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;

  return (
    <div className={style.langSwitcher}>
      <span
        className={currentLang === "ua" ? style.active : ""}
        onClick={() => changeLanguage("ua")}
      >
        UA
      </span>
      <span className={style.separator}>|</span>
      <span
        className={currentLang === "en" ? style.active : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </span>
    </div>
  );
};
