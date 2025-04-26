import { ButtonBack } from "../_components/ButtonBack/ButtonBack.jsx";
import { DecorOr } from "../_components/DecorOr/DecorOr.jsx";
import { FormContainer } from "../_components/FormContainer/FormContainer.jsx";
import { GoogleLoginButton } from "../_components/GoogleLoginButton/GoogleLoginButton.jsx";
import { HaveAccaunt } from "../_components/HaveAccaunt/HaveAccaunt.jsx";
import SignUpForm from "../_components/SignUpForm/SignUpForm.jsx";

export const SignUpPage = () => {
  return (
    <FormContainer>
      <ButtonBack path="/" />
      <SignUpForm />
      <DecorOr />
      <GoogleLoginButton />
      <HaveAccaunt
        text="Alredy have an account?"
        path="/signin"
        link="Sign in"
      />
    </FormContainer>
  );
};
