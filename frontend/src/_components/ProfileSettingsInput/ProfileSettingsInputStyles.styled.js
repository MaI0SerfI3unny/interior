import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSettingsInputStyles = styled.div`
  position: relative;

  h3 {
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    color: ${theme.typography.primary};
    margin-bottom: 8px;
  }

  h4 {
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    line-height: 1.33;
    color: ${theme.typography.primary};
    margin-bottom: 8px;
  }

  .description {
    font-family: "Manrope", sans-serif;
    font-size: 14px;
    line-height: 1.33;
    color: rgb(112, 109, 106);
  }

  .change-container {
    margin-bottom: 24px;
  }

  .placeholder {
    font-family: "Manrope", sans-serif;
    line-height: 1.33;
    color: rgb(112, 109, 106);
  }

  input {
    font-family: "Manrope", sans-serif;
    line-height: 1.33;
    border: none;
    outline: none;
    padding: 13px 0px 13px 13px;
    width: 100%;
    font-size: 16px;
    line-height: 1.33;
    height: 48px;
    color: ${theme.typography.primary};
  }

  .changing-btn {
    background-color: transparent;
    color: rgb(0, 103, 201);
    line-height: 1.33;
    font-size: 16px;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
  }

  .save-btn {
    background-color: ${theme.background.button};
    color: ${theme.typography.buttonText};
    font-size: 16px;
    line-height: 1.33;
    font-weight: 600;
    border-radius: 4px;
  }

  .save-btn[disabled] {
    background-color: rgb(138, 138, 146);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    h3 {
      font-size: 12px;
      line-height: 1.25;
    }
    h4 {
      font-size: 14px;
    }
    .input-container {
      margin-bottom: 24px;
    }

    input {
      font-size: 14px;
      margin-bottom: 20px;
    }

    .save-btn {
      text-align: center;
      width: 100%;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }

  @media screen and (min-width: 769px) {
    margin-bottom: 24px;

    h3 {
      font-size: 14px;
      line-height: 1.33;
    }
    h4 {
      font-size: 16px;
    }

    .input-btn-wrapper {
      position: relative;
    }

    .save-btn {
      position: absolute;
      right: 0;
      bottom: 0;
      padding-left: 40px;
      padding-right: 40px;
      height: 100%;
    }

    hr {
      margin-top: 16px;
    }
  }

  @media screen and (min-width: 1441px) {
    .save-btn {
      transition: 250ms linear;

      &:not(:disabled)&:hover,
      &:not(:disabled)&:focus {
        background-color: ${theme.background.buttonHover};
      }
    }

    .changing-btn:hover::after,
    .changing-btn:focus::after {
      opacity: 1;
    }

    .changing-btn::after {
      transition: 250ms linear;
    }

    .changing-btn::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: rgb(0, 103, 201);
      opacity: 0;
    }
  }
`;
