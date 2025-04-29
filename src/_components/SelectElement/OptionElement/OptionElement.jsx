import { OptionElementStyles } from "./OptionElementStyles.styled"

const OptionElement = ({value, text}) => {
  return (
    <OptionElementStyles value={value}>{text}</OptionElementStyles>
  )
}

export default OptionElement
