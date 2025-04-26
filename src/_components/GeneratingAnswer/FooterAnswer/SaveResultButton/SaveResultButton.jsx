import { SaveResultButtonStyles } from "./SaveResultButtonStyles.styled"

const SaveResultButton = ({pdS}) => {
  return (
    <SaveResultButtonStyles $pdS={pdS}>
      Зберегти
    </SaveResultButtonStyles>
  )
}

export default SaveResultButton
