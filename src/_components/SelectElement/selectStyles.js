import { theme } from "../../assets/constants/themeColors";

export const selectStyles = {
  control: base => ({
    ...base,
    backgroundColor: theme.background.inputs,
    borderColor: "rgb(223, 218, 252)",
    padding: "2px",
    fontSize: "14px",
    lineHeight: "1.6",
    boxShadow: "none",
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: "4px",
    backgroundColor: state.isFocused
      ? theme.background.hoverOption
      : state.isSelected
        ? theme.background.selectedOption
        : theme.background.inputs,
    color: "rgb(40,43,53)",
    cursor: "pointer",
  }),
  menu: base => ({
    ...base,
    zIndex: 1000,
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: "250px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "128px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgb(223,218,214)",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555",
    },
    "&::-webkit-scrollbar-track": {
      background: "white",
    },
  }),
};
