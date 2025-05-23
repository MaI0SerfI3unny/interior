import { useDispatch, useSelector } from "react-redux";
import { ButtonBack } from "../_components/ButtonBack/ButtonBack.jsx";
import { DecorOr } from "../_components/DecorOr/DecorOr.jsx";
import { FormContainer } from "../_components/FormContainer/FormContainer.jsx";
import { GoogleLoginButton } from "../_components/GoogleLoginButton/GoogleLoginButton.jsx";
import { HaveAccaunt } from "../_components/HaveAccaunt/HaveAccaunt.jsx";
import SignInForm from "../_components/SignInForm/SignInForm.jsx";
import { useTranslation } from "react-i18next";
import { selectisLoggedIn } from "../redux/user/selectors.js";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../redux/user/operations.js";

import { setAuthHeader } from "../api/axios.config.js";
import { setToken } from "../redux/user/slice.js";

export const SignInPage = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectisLoggedIn);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    setAuthHeader(token);

    dispatch(setToken(token));
    dispatch(getUser());

    navigate("/generating", { replace: true });

    window.history.replaceState({}, document.title, "/signin");
  }, [token, dispatch]);

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
