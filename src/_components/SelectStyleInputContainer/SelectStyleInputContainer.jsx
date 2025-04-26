
import SelectStyleLabel from './SelectStyleLabel/SelectStyleLabel'
import {SelectStyleInputContainerStyles} from './SelectStyleInputContainerStyles.styled'



const SelectStyleInputContainer = ({ value, initialValues }) => {
  return (
    <div>
      <h2>Обрати стиль</h2>
      <SelectStyleInputContainerStyles>
        {initialValues.map(({ text, initialValue }) => (
          <SelectStyleLabel
            key={initialValue}
            name="style"
            value={initialValue}
            isSelected={value === initialValue} 
            text={text}
          />
        ))}
      </SelectStyleInputContainerStyles>
    </div>
  )
}

export default SelectStyleInputContainer