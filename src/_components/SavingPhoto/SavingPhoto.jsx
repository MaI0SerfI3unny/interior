import { SavingPhotoStyles } from "./SavingPhotoStyles.styled";
import { ReactComponent as TickIcon } from "../../svg/check.svg";

const SavingPhoto = ({ text }) => {
  return (
    <SavingPhotoStyles>
      <div className="icon-container">
        <TickIcon />
      </div>
      <h2>{text}</h2>
    </SavingPhotoStyles>
  );
};

export default SavingPhoto;
