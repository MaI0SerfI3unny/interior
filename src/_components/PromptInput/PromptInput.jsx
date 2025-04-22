import { TextAreaPrompt } from "./PromptInputStyles.styled"
const PromptInput = ({onChange, value}) => {
  return (<div>
    <h2>Введіть prompt</h2>
    <TextAreaPrompt onChange={onChange} name='prompt' value={value} placeholder='Напишіть, що ви хочете згенерувати...' />
    </div>
  )
}

export default PromptInput
