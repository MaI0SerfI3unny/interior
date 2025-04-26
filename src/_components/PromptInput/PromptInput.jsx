import { TextAreaPrompt } from './PromptInputStyles.styled'

const PromptInput = () => {
  return (
    <div>
      <h2>Введіть prompt</h2>
      <TextAreaPrompt
        name="prompt"
        placeholder="Напишіть, що ви хочете згенерувати..."
      />
    </div>
  )
}

export default PromptInput