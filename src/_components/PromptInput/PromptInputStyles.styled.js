import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const TextAreaPrompt = styled.textarea`
  width: 100%;
  height: 88px;
  resize: none;
  padding: 12px 16px;
  border: 1px solid ${theme.buttonBorder};
  border-radius: 4px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1.33;
  color: ${theme.typography.placeholders};

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1.33;
    color: ${theme.typography.placeholders};
  }

  &:focus {
    border-color: ${theme.inputBorderFocus};
  }
`;
