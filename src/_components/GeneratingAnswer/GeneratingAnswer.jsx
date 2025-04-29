import { GeneratingAnswerStyles } from "./GeneratingAnswerStyles.styled"
import HeaderAnswer from './HeaderAnswer/HeaderAnswer'
import MainAnswerWindow from "./MainAnswerWindow/MainAnswerWindow"
import FooterAnswer from "./FooterAnswer/FooterAnswer"

const GeneratingAnswer = ({result}) => {


  return (
    <GeneratingAnswerStyles>
      <HeaderAnswer />
      <MainAnswerWindow />
      {result && <FooterAnswer />}

     
    </GeneratingAnswerStyles>
  )
}

export default GeneratingAnswer
