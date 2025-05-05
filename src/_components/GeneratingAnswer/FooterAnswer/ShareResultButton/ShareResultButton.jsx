import { ReactComponent as ShareIcon } from "../../../../svg/share.svg";
import { FooterIconButtonStyles } from "../FooterButtonIconStyles.styled.";

const ShareResultButton = () => {
  return (
    <FooterIconButtonStyles>
      <ShareIcon width={24} height={24} />
    </FooterIconButtonStyles>
  );
};

export default ShareResultButton;
