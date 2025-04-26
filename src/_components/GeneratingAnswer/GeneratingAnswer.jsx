import { GeneratingAnswerStyles } from "./GeneratingAnswerStyles.styled"
import HeaderAnswer from './HeaderAnswer/HeaderAnswer'
import MainAnswerWindow from "./MainAnswerWindow/MainAnswerWindow"
import FooterAnswer from "./FooterAnswer/FooterAnswer"

const GeneratingAnswer = () => {


  return (
    <GeneratingAnswerStyles>
      <HeaderAnswer />
      <MainAnswerWindow />
      <FooterAnswer />

     
    </GeneratingAnswerStyles>
  )
}

export default GeneratingAnswer
