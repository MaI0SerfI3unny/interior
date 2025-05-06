import { GeneratingAnswerStyles } from "./GeneratingAnswerStyles.styled";
import HeaderAnswer from "./HeaderAnswer/HeaderAnswer";
import MainAnswerWindow from "./MainAnswerWindow/MainAnswerWindow";
import FooterAnswer from "./FooterAnswer/FooterAnswer";

const GeneratingAnswer = ({ result, toggleModal }) => {
  return (
    <GeneratingAnswerStyles>
      <HeaderAnswer />
      <MainAnswerWindow />
      {result && <FooterAnswer toggleModal={toggleModal} />}
    </GeneratingAnswerStyles>
  );
};

export default GeneratingAnswer;
