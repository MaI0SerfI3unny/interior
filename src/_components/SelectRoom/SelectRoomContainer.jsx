import { SelectRoomContainerStyles, ArrowContainer, SelectWrapper } from "./SelectRoomContainerStyles.styled"
import { ReactComponent as ArrowIcon} from '../../svg/vector.svg'
import OptionElement from "./OptionElement/OptionElement"
import { useState } from "react"


const initialValues = [
  {text : 'Кухня',
    value : 'citchen'
  },
  {text : 'Студія',
    value : 'studio'
  },
  {text : 'Вітальня',
    value : 'hello'
  },
  {text : 'Ванна кімната',
    value : 'bathroom'
  },
  {text : 'Спальня',
    value : 'sleep'
  },
]

const SelectRoomContainer = ({onChange}) => {
  const [values] = useState(initialValues)



  return (<SelectRoomContainerStyles>
    <h2>Обрати кімнату</h2>
    <SelectWrapper>
    <select name='room' onChange={onChange}>
      {values.map(({text, value}) => <OptionElement key = {value} value={value} text={text} />)}
    </select>
    <ArrowContainer>
        <ArrowIcon />
      </ArrowContainer>
    </SelectWrapper>
    </SelectRoomContainerStyles>
  )
}

export default SelectRoomContainer
