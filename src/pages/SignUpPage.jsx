import { useSelector } from "react-redux";
import { ButtonBack } from "../_components/ButtonBack/ButtonBack.jsx";
import { DecorOr } from "../_components/DecorOr/DecorOr.jsx";
import { FormContainer } from "../_components/FormContainer/FormContainer.jsx";
import { GoogleLoginButton } from "../_components/GoogleLoginButton/GoogleLoginButton.jsx";
import { HaveAccaunt } from "../_components/HaveAccaunt/HaveAccaunt.jsx";
import SignUpForm from "../_components/SignUpForm/SignUpForm.jsx";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectisLoggedIn } from "../redux/user/selectors.js";

export const SignUpPage = () => {
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
      <SignUpForm />
      <DecorOr />
      <GoogleLoginButton />
      <HaveAccaunt
        text={t("login.haveAcc")}
        path="/signin"
        link={t("login.haveAccLink")}
      />
    </FormContainer>
  );
};
