import SelectStyleInput from "./SelectStyleInput/SelectStyleInput"
import { SelectStyleLabelStyles } from "./SelectStyleLabelStyles.styled"
import SelectStyleCustomInput from "./SelectStyleInput/SelectStyleCustomInput"

const SelectStyleLabel = ({ value, text, selectedValue, onChange, name}) => {

  return (
    <SelectStyleLabelStyles $selectedValue={selectedValue} $value={value}>
      <SelectStyleInput value={value} name={name} onChange={onChange}  />
      <SelectStyleCustomInput/>
      {text}
    </SelectStyleLabelStyles>
  )
}

export default SelectStyleLabel
