import styled from "styled-components";
import { theme } from "../../../../assets/constants/themeColors";

export const UpgradeButtonStyles = styled.button`
  font-weight: 600;

  background-color: ${theme.background.button};
  border: none;
  border-radius: 4px;

  color: ${theme.typography.buttonText};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 14px 25px;
  }

  @media screen and (min-width: 769px) {
    font-size: 16px;
    padding: 12px 41px;
  }

  @media screen and (min-width: 1441px) {
    transition: 250ms linear;

    &:hover,
    &:focus {
      background-color: ${theme.background.buttonHover};
    }
  }
`;
