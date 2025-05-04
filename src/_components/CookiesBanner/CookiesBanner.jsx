import { Link } from "react-router-dom";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { useEffect, useState } from "react";
import css from "./CookiesBanner.module.scss";

export const CookiesBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookie = document.cookie;
    const getConsest = cookie.includes("cookieConsent=accepted");
    console.log(getConsest, "cookie");

    if (!getConsest) {
      setShowBanner(true);
    }
  }, []);

  const setCookieConsent = () => {
    document.cookie =
      "cookieConsent=accepted; path=/; max-age=31536000; SameSite=Lax";

    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className={css.backdrop}></div>
      <div className={css.cookiesBanner}>
        <Cross className={css.btnClose} onClick={() => setShowBanner(false)} />
        <div className={css.textContainer}>
          <p>
            Наш сайт використовує файли cookies для покращення вашого досвіду
            користування та забезпечення коректної роботи вебсайту.{" "}
          </p>
          <p>
            Для отримання додаткової інформації, будь ласка, ознайомтесь із
            нашою
            <Link to="/privacyPolicy" className={css.link}>
              {" "}
              Політикою конфіденційності
            </Link>
          </p>
        </div>
        <button
          type="submit"
          onClick={setCookieConsent}
          className={css.btnCookie}
        >
          Прийняти
        </button>
      </div>
    </>
  );
};
