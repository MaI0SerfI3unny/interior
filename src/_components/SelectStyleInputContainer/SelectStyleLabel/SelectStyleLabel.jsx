import SelectStyleInput from "./SelectStyleInput/SelectStyleInput"
import { SelectStyleLabelStyles } from "./SelectStyleLabelStyles.styled"
import SelectStyleCustomInput from "./SelectStyleInput/SelectStyleCustomInput"

const SelectStyleLabel = ({ value, text, isSelected, onChange, name}) => {
  return (
    <SelectStyleLabelStyles $selectedValue={isSelected} $value={value}>
      <SelectStyleInput value={value} name={name} onChange={onChange}  />
      <SelectStyleCustomInput/>
      {text}
    </SelectStyleLabelStyles>
  )
}

export default SelectStyleLabel
