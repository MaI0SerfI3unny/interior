import { TextAreaPrompt } from './PromptInputStyles.styled'
import { Field } from 'formik'

const PromptInput = () => {
  return (
    <div>
      <h2>Введіть prompt</h2>
      <Field as={TextAreaPrompt}
        name="prompt"
        placeholder="Напишіть, що ви хочете згенерувати..."
      />
    </div>
  )
}

export default PromptInput