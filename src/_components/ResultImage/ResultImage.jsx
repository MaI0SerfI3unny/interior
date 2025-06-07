import { ResultImageStyles } from "./ResultImageStyles.styled";

const ResultImage = ({ result }) => {
  return (
    <ResultImageStyles
      // eslint-disable-next-line no-undef
      src={`${process.env.REACT_APP_IMG_URL}${result.result}`}
    />
  );
};

export default ResultImage;
