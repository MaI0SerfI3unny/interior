import { FooterAnswerStyles } from "./FooterAnswerStyles.styled";
import SaveResultButton from "./SaveResultButton/SaveResultButton";
import DownloadResultButton from "./DownloadResultButton/DownloadResultButton";
import ShareResultButton from "./ShareResultButton/ShareResultButton";

const FooterAnswer = () => {
  return (
    <FooterAnswerStyles>
      <SaveResultButton pdS={21} />
      <DownloadResultButton />
      <ShareResultButton />
    </FooterAnswerStyles>
  );
};

export default FooterAnswer;
