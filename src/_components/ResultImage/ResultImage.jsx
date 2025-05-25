import { ResultImageStyles } from "./ResultImageStyles.styled";

const ResultImage = ({ result }) => {
  return <ResultImageStyles src={result.result} />;
};

export default ResultImage;
