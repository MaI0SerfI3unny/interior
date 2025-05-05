import { ExitButtonStyles } from "./ExitButtonStyles.styled";

const ExitButton = ({ dontSave }) => {
  return <ExitButtonStyles onClick={dontSave}>Відмінити</ExitButtonStyles>;
};

export default ExitButton;
