import { ResultImageStyles } from "./ResultImageStyles.styled";
import resultImage from "../../pictures/result-image.jpg";

const ResultImage = () => {
  return <ResultImageStyles $resultImage={resultImage} />;
};

export default ResultImage;
