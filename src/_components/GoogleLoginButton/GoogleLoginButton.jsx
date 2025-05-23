import { useDispatch } from "react-redux";
import css from "./GoogleLoginButton.module.scss";
import { ReactComponent as FcGoogle } from "@/assets/icons/google.svg";
import { useTranslation } from "react-i18next";
import { getOauthUrl } from "../../redux/user/operations.js";

export const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleGoogleLogin = async () => {
    try {
      const { auth_url } = await dispatch(getOauthUrl()).unwrap();

      window.location.href = auth_url;
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
