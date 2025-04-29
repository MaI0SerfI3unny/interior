import { useDispatch } from "react-redux";
import css from "./GoogleLoginButton.module.scss";
import { ReactComponent as FcGoogle } from "@/assets/icons/google.svg";
import { useTranslation } from "react-i18next";

export const GoogleLoginButton = ({ children }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleGoogleLogin = async () => {
    try {
      const {
        data: { url },
      } = await dispatch().unwrap();
      window.location.href = url;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button onClick={handleGoogleLogin} className={css.button}>
        <FcGoogle className={css.google} />
        {t("login.google")}
      </button>
    </>
  );
};
