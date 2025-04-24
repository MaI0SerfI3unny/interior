import { ButtonBack } from "../_components/ButtonBack/ButtonBack.jsx";
import { FormContainer } from "../_components/FormContainer/FormContainer.jsx";
import { SendRecoveryEmailForm } from "../_components/SendRecoveryEmailForm/SendRecoveryEmailForm.jsx";

export const SendRecoveryEmail = () => {
  return (
    <FormContainer>
      <ButtonBack path="/signin" />
      <SendRecoveryEmailForm />
    </FormContainer>
  );
};
