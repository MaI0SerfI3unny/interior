import { ButtonBack } from "../_components/ButtonBack/ButtonBack.jsx";
import { FormContainer } from "../_components/FormContainer/FormContainer.jsx";
import { RecoveryPwdForm } from "../_components/RecoveryPwdForm/RecoveryPwdForm.jsx";

export const RecoveryPwd = () => {
  return (
    <FormContainer>
      <ButtonBack path="/signin" />
      <RecoveryPwdForm />
    </FormContainer>
  );
};
