import { SelectStyleInputStyles } from "./SelectStyleInput.styled"

const SelectStyleInput = ({ value, onChange, name}) => {
  return (
    <SelectStyleInputStyles type='radio' name={name} value={value} onChange={onChange} />
      
  )
}

export default SelectStyleInput
