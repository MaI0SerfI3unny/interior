import DownloadFileInput from '../DownloadFileInput/DownloadFileInput'
import PromptInput from '../PromptInput/PromptInput'
import SelectStyleInputContainer from '../SelectStyleInputContainer/SelectStyleInputContainer'
import SelectRoomContainer from '../SelectRoom/SelectRoomContainer'
import { GeneratingFormStyles } from "./GeneratingFormStyles.styled"
import SubmitButton from '../SubmitButton/SubmitButton'
import { useState } from "react"


const initialValue = {
  
    photo : null,
    prompt : '',
    style : '',
    room : 'citchen',
  
}

const GeneratingForm = () => {
    const [data, setData] = useState(initialValue)

    function onDeletePhoto () {
      setData(prevData => ({...prevData, photo : null}))
    }


    function onChange ({target : {value, name}}) {
      if (name === 'photo') {
        setData(prevData => ({...prevData, [name] : {
          value,
        }}))
      } else {
      setData(prevData => ({...prevData, [name] : value}))
      }
    }

  function handleSubmit (e) {
    e.preventDefault();
    console.log(data)
    // setResult(data)
  }

  const {photo, prompt, style, room} = data;

  return (
    <GeneratingFormStyles onSubmit={handleSubmit}>
        <DownloadFileInput onChange={onChange} value={photo} onDeletePhoto={onDeletePhoto} />
        <PromptInput onChange={onChange} value={prompt} />
        <SelectStyleInputContainer onChange={onChange} value={style} />
        <SelectRoomContainer onChange={onChange} value={room} />
        <SubmitButton disabled={!prompt || !style} />
        <p className="text-count-trying">*у вас є 10 безкоштовних генерацій</p>

    </GeneratingFormStyles>
  )
}

export default GeneratingForm
