import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";
export const ProfileChangePasswordFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 24px;

  .save-btn {
    background-color: ${theme.background.button};
    width: 100%;
    color: ${theme.typography.buttonText};
    font-weight: 600;
    padding-top: 12px;
    padding-bottom: 12px;
    font-family: "Manrope", sans-serif;
    line-height: 1.33;
    border-radius: 4px;
  }

  .save-btn:disabled {
    background-color: rgb(138, 138, 146);
  }

  @media screen and (min-width: 144px) {
    .save-btn {
      transition: 250ms linear;

      &:not(:disabled)&:hover,
      &:not(:disabled)&:focus {
        background-color: ${theme.background.buttonHover};
      }
    }
  }
`;
