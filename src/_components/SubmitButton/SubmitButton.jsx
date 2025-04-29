import { SubmitButtonStyles } from "./SubmitButtonStyles.styled";
import { ReactComponent as GenerateIcon } from "../../svg/sparkles.svg";

const SubmitButton = ({ disabled }) => {
  return (
    <SubmitButtonStyles type="submit" disabled={disabled}>
      Згенерувати
      <GenerateIcon width={24} height={24} />
    </SubmitButtonStyles>
  );
};

export default SubmitButton;
