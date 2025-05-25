import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileDeleteAccountModalStyles = styled.div`
  background-color: rgb(244, 241, 236);
  height: 70%;
  text-align: center;
  padding-top: 48px;

  .btns-container {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;
  }

  .btns-container > button {
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 4px;
    font-weight: 600;
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    line-height: 1.33;
  }

  .delete-btn {
    background-color: ${theme.background.button};
    color: ${theme.typography.buttonText};
    border: 1px solid ${theme.background.button};
  }

  .dont-delete-btn {
    color: ${theme.typography.primary};
    border: 1px solid ${theme.typography.primary};
  }

  h2 {
    font-family: "Manrope", sans-serif;
    font-size: 20px;
    line-height: 1.4;
    color: ${theme.typography.primary};
    margin-bottom: 12px;
  }

  p {
    font-family: "Manrope", sans-serif;
    line-height: 1.3;
    color: ${theme.typography.primary};
  }

  @media screen and (max-width: 768px) {
    width: 320px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;

    p {
      font-size: 14px;
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 769px) {
    width: 450px;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 40px;
  }

  p {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1441px) {
    .delete-btn,
    .dont-delete-btn {
      transition: 250ms linear;
    }

    .delete-btn:hover,
    .delete-btn:focus,
    .dont-delete-btn:hover,
    .dont-delete-btn:focus {
      background-color: ${theme.background.buttonHover};
    }

    .dont-delete-btn:hover,
    .dont-delete-btn:focus {
      color: ${theme.typography.buttonText};
      border-color: ${theme.background.button};
    }
  }
`;
