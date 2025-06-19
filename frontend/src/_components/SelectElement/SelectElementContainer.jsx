import { SelectElementContainerStyles } from "./SelectElementContainerStyles.styled";
import { useField, useFormikContext } from "formik";
import OptionElement from "./OptionElement/OptionElement";
import Select from "react-select";
import { selectStyles } from "./selectStyles";

const SelectElementContainer = ({ initialValues, name, title }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const selectedOption = initialValues.find(opt => opt.value === field.value);

  return (
    <SelectElementContainerStyles>
      <h2>{title}</h2>
      <Select
        options={initialValues}
        value={selectedOption}
        onChange={option => setFieldValue(name, option.value)}
        styles={selectStyles}
        components={{ Option: OptionElement, IndicatorSeparator: () => null }}
      />
    </SelectElementContainerStyles>
  );
};

export default SelectElementContainer;
