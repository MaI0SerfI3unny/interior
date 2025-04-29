import {
  SelectElementContainerStyles,
  SelectWrapper,
  ArrowContainer,
} from "./SelectElementContainerStyles.styled";
import { ReactComponent as ArrowIcon } from "../../svg/vector.svg";
import OptionElement from "./OptionElement/OptionElement";
import { Field } from "formik";



const SelectElementContainer = ({ initialValues, name, title }) => {
  return (
    <SelectElementContainerStyles>
      <h2>{title}</h2>
      <SelectWrapper>
        <Field as="select" name={name}>
          {initialValues.map(({ text, value }) => (
            <OptionElement key={value} value={value} text={text} />
          ))}
        </Field>
        <ArrowContainer>
          <ArrowIcon />
        </ArrowContainer>
      </SelectWrapper>
    </SelectElementContainerStyles>
  );
};

export default SelectElementContainer;
