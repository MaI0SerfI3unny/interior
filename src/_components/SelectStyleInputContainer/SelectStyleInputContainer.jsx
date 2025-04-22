import { SelectStyleInputContainerStyles } from "./SelectStyleInputContainerStyles.styled"
import SelectStyleLabel from "./SelectStyleLabel/SelectStyleLabel"

import { useState } from "react"

const initialValues = [
    {
        text : 'Класичний',
        initialValue : 'classic'
    },
    {
        text : 'Мінімалізм',
        initialValue :  'minimal'
    },
    {
        text : 'Сучасний',
        initialValue : 'suchasniy' 
    },
    {
        text : 'Вінтажний',
        initialValue : 'vintage'
    }, 
    {
        text : 'Модерн',
        initialValue : 'modern'
    },


    {
        text : 'Індустріальний',
        initialValue : 'industrial' 
    }
]

const SelectStyleInputContainer = ({onChange, value}) => {
    const [values] = useState(initialValues)
  return (
    <div>
    <h2>Обрати стиль</h2>
        <SelectStyleInputContainerStyles>
            {values.map(({text, initialValue}) => <SelectStyleLabel selectedValue={value} key={initialValue} onChange={onChange} text={text} value={initialValue} name='style'  />)}
       
        </SelectStyleInputContainerStyles>
        </div>
  )
}

export default SelectStyleInputContainer
