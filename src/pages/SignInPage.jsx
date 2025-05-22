import { useSelector } from "react-redux";
import { ButtonBack } from "../_components/ButtonBack/ButtonBack.jsx";
import { DecorOr } from "../_components/DecorOr/DecorOr.jsx";
import { FormContainer } from "../_components/FormContainer/FormContainer.jsx";
import { GoogleLoginButton } from "../_components/GoogleLoginButton/GoogleLoginButton.jsx";
import { HaveAccaunt } from "../_components/HaveAccaunt/HaveAccaunt.jsx";
import SignInForm from "../_components/SignInForm/SignInForm.jsx";
import { useTranslation } from "react-i18next";
import { selectisLoggedIn } from "../redux/user/selectors.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SignInPage = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectisLoggedIn);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isLoggedIn) navigate(from, { replace: true });
  }, [isLoggedIn, from, navigate]);

  return (
    <FormContainer>
      <ButtonBack path="/" />
      <SignInForm />
      <DecorOr />
      <GoogleLoginButton />
      <HaveAccaunt
        text={t("login.dontHaveAcc")}
        path="/signup"
        link={t("login.dontHaveAccLink")}
      />
    </FormContainer>
  );
};
