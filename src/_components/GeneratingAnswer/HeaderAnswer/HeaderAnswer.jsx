import { HeaderAnswerStyles } from "./HeaderAnswerStyles.styled";
import UpgradeButton from "./UpgradeButton/UpgradeButton";
import { ReactComponent as GenerateIcon } from "../../../svg/sparkles-dark.svg";

const HeaderAnswer = () => {
  return (
    <HeaderAnswerStyles>
      <div className="right-side-container">
        <div className="count-container">
          <p className="count">10</p>
          <div className="generate-icon">
            <GenerateIcon width={18} height={18} />
          </div>
        </div>

        <UpgradeButton />
      </div>
    </HeaderAnswerStyles>
  );
};

export default HeaderAnswer;
