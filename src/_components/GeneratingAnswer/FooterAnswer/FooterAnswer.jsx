import { FooterAnswerStyles } from "./FooterAnswerStyles.styled";
import SaveResultButton from "./SaveResultButton/SaveResultButton";
import DownloadResultButton from "./DownloadResultButton/DownloadResultButton";
import ShareResultButton from "./ShareResultButton/ShareResultButton";

const FooterAnswer = ({ toggleModal }) => {
  return (
    <FooterAnswerStyles>
      <SaveResultButton pdS={21} toggleModal={toggleModal} />
      <DownloadResultButton />
      <ShareResultButton />
    </FooterAnswerStyles>
  );
};

export default FooterAnswer;
