import { useDispatch } from "react-redux";

import css from "./GoogleLoginButton.module.css";

import { ReactComponent as FcGoogle } from "@/assets/icons/google.svg";

export const GoogleLoginButton = ({ children }) => {
  const dispatch = useDispatch();

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
        Sign In with Google
      </button>
    </>
  );
};
