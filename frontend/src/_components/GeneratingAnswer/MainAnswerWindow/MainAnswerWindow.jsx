import { MainAnswerWindowStyles } from "./MainAnswerWindowStyles.styled";
import InstructionText from "./InstructionText/InstructionText";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import ResultImage from "../../ResultImage/ResultImage";

const MainAnswerWindow = ({ isLoadingAnswer, result }) => {
  return (
    <MainAnswerWindowStyles>
      {!isLoadingAnswer && !result && <InstructionText />}
      {isLoadingAnswer && <LoadingComponent />}
      {result && !isLoadingAnswer && <ResultImage result={result} />}
    </MainAnswerWindowStyles>
  );
};

export default MainAnswerWindow;
