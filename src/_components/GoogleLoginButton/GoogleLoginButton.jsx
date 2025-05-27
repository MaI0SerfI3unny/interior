import { useDispatch } from "react-redux";
import css from "./GoogleLoginButton.module.scss";
import { ReactComponent as FcGoogle } from "@/assets/icons/google.svg";
import { useTranslation } from "react-i18next";

import { toastError } from "../../assets/functions/toastNotification.js";
import { getOauthUrl } from "../../redux/auth/operations.js";

export const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleGoogleLogin = async () => {
    try {
      const { auth_url } = await dispatch(getOauthUrl()).unwrap();
      console.log(auth_url, "url");

      window.location.href = auth_url;
    } catch (error) {
      toastError(t("auth.somethingWentWrong"));
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
