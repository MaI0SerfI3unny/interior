import { ReactComponent as Tick } from "../../../svg/tick.svg";
import { components } from "react-select";
import { OptionContainerStyles } from "./OptionContainerStyles.styled";

const OptionElement = props => {
  const { isSelected, children } = props;

  return (
    <components.Option {...props}>
      <OptionContainerStyles>
        {children}
        {isSelected && <Tick width={20} height={20} />}
      </OptionContainerStyles>
    </components.Option>
  );
};

export default OptionElement;
