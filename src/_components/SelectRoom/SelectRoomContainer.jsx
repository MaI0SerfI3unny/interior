
import {
  SelectRoomContainerStyles,
  SelectWrapper,
  ArrowContainer,
} from './SelectRoomContainerStyles.styled'
import {ReactComponent as ArrowIcon} from '../../svg/vector.svg'
import OptionElement from './OptionElement/OptionElement'
import { Field } from 'formik'

const initialValues = [
  { text: 'Кухня', value: 'citchen' },
  { text: 'Студія', value: 'studio' },
  { text: 'Вітальня', value: 'hello' },
  { text: 'Ванна кімната', value: 'bathroom' },
  { text: 'Спальня', value: 'sleep' },
]

const SelectRoomContainer = ({initialValues}) => {
  return (
    <SelectRoomContainerStyles>
      <h2>Обрати кімнату</h2>
      <SelectWrapper>
        <Field as='select' name="room"  >
          {initialValues.map(({ text, value }) => (
            <OptionElement key={value} value={value} text={text} />
          ))}
        </Field>
        <ArrowContainer>
          <ArrowIcon />
        </ArrowContainer>
      </SelectWrapper>
    </SelectRoomContainerStyles>
  )
}

export default SelectRoomContainer