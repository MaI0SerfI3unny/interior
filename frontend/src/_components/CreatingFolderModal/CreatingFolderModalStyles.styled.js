import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const CreatingFolderModalStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    text-align: center;
    font-size: 20px;
    line-height: 1.3;
  }

  .error {
    color: red;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    h3 {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.3;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      background-color: ${theme.background.inputs};
      padding: 12px 14px;
      border-radius: 4px;
      border-color: ${theme.stroke.secondary};
      outline: none;
    }

    button {
      background-color: ${theme.background.button};
      width: 100%;
      padding-top: 12px;
      padding-bottom: 12px;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.33;
      color: ${theme.typography.buttonText};
    }

    button:disabled {
      background-color: ${theme.background.disabletButton};
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      margin-bottom: 24px;
    }

    form > button {
      margin-top: 32px;
    }
  }

  @media screen and (min-width: 769px) {
    h2 {
      margin-bottom: 40px;
    }

    form > button {
      margin-top: 40px;
    }
  }

  @media screen and (min-width: 769px) {
    button {
      transition: 250ms linear;

      &:not(:disabled)&:hover,
      &:not(:disabled)&:focus {
        background-color: ${theme.background.buttonHover};
      }
    }
  }
`;
