import { FooterAnswerStyles } from "./FooterAnswerStyles.styled";
import SaveResultButton from "./SaveResultButton/SaveResultButton";
import DownloadResultButton from "./DownloadResultButton/DownloadResultButton";

const FooterAnswer = ({ toggleModal, result }) => {
  return (
    <FooterAnswerStyles>
      <SaveResultButton pdS={21} toggleModal={() => toggleModal(true)} />
      <DownloadResultButton result={result} />
    </FooterAnswerStyles>
  );
};

export default FooterAnswer;
