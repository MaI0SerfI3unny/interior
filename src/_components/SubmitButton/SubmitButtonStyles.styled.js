import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const SubmitButtonStyles = styled.button`
  width: 100%;
  background-color: ${theme.background.button};
  border: none;
  border-radius: 4px;
  display: flex;
  column-gap: 12px;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.33;
  color: ${theme.typography.buttonText};

  &:disabled {
    background-color: ${theme.background.disabletButton};
  }

  @media screen and (min-width: 761px) {
    transition: 250ms linear;

    &:not(:disabled)&:hover,
    &:not(:disabled)&:focus {
      background-color: ${theme.background.buttonHover};
    }
  }
`;
