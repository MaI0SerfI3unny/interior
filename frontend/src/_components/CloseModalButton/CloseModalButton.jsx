import { CloseModalButtonStyles } from "./CloseModalButtonStyles.styled";
import { ReactComponent as CloseIcon } from "../../svg/cross.svg";

const CloseModalButton = ({ toggleModal }) => {
  return (
    <CloseModalButtonStyles onClick={toggleModal}>
      <CloseIcon width={24} height={24} />
    </CloseModalButtonStyles>
  );
};

export default CloseModalButton;
