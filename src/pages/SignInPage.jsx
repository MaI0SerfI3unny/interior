import { ButtonBack } from "../_components/ButtonBack/ButtonBack.jsx";
import { DecorOr } from "../_components/DecorOr/DecorOr.jsx";
import { FormContainer } from "../_components/FormContainer/FormContainer.jsx";
import { GoogleLoginButton } from "../_components/GoogleLoginButton/GoogleLoginButton.jsx";
import { HaveAccaunt } from "../_components/HaveAccaunt/HaveAccaunt.jsx";
import SignInForm from "../_components/SignInForm/SignInForm.jsx";
import { useTranslation } from "react-i18next";

export const SignInPage = () => {
  const { t } = useTranslation();

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
