import { ButtonBack } from "../_components/ButtonBack/ButtonBack.jsx";
import { DecorOr } from "../_components/DecorOr/DecorOr.jsx";
import { FormContainer } from "../_components/FormContainer/FormContainer.jsx";
import { GoogleLoginButton } from "../_components/GoogleLoginButton/GoogleLoginButton.jsx";
import { HaveAccaunt } from "../_components/HaveAccaunt/HaveAccaunt.jsx";
import SignInForm from "../_components/SignInForm/SignInForm.jsx";

export const SignInPage = () => {
  return (
    <FormContainer>
      <ButtonBack path="/" />
      <SignInForm />
      <DecorOr />
      <GoogleLoginButton />
      <HaveAccaunt
        text="Don’t have an account?"
        path="/signup"
        link="Sign up"
      />
    </FormContainer>
  );
};
