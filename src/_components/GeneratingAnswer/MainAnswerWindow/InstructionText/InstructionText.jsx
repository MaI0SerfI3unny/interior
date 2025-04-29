import { InstructionTextStyles } from "./InstructionTextStyles.styled"

const InstructionText = () => {
  return (
    <InstructionTextStyles>
    
          <h2 className="title">INTERIOR AI</h2>
      <p className="instruction-title">Рендеріть або змінюйте свій дизайн екстер’єру за лічені секунди. Просто завантажте фотографію чи ескіз і подивіться на магію в дії.</p>

      <ol className="instruction-list">
        <li>Напишіть prompt, опишіть який результат хочете отримати. Опишіть кольори чи інші деталі.</li>
        <li> Напишіть prompt, опишіть який результат хочете отримати. Опишіть кольори чи інші деталі.</li>
        <li>ННапишіть prompt, опишіть який результат хочете отримати. Опишіть кольори чи інші деталі.</li>
      </ol>
    </InstructionTextStyles>
  )
}

export default InstructionText
