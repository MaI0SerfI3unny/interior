import { GeneratingAnswerStyles } from "./GeneratingAnswerStyles.styled";
import HeaderAnswer from "./HeaderAnswer/HeaderAnswer";
import MainAnswerWindow from "./MainAnswerWindow/MainAnswerWindow";
import FooterAnswer from "./FooterAnswer/FooterAnswer";

const GeneratingAnswer = ({ result, toggleModal, isLoadingAnswer }) => {
  return (
    <GeneratingAnswerStyles>
      <HeaderAnswer />
      <MainAnswerWindow isLoadingAnswer={isLoadingAnswer} result={result} />
      {result && !isLoadingAnswer && <FooterAnswer toggleModal={toggleModal} />}
    </GeneratingAnswerStyles>
  );
};

export default GeneratingAnswer;
