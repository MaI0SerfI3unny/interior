import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileGenerationsEmptyGenerationsStyles = styled.div`
  text-align: center;

  p {
    color: ${theme.typography.secondary};
    margin-bottom: 40px;
    font-family: "Manrope", sans-serif;
  }

  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 12px;
    padding-bottom: 12px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.33;
    background-color: ${theme.background.button};
    color: ${theme.typography.buttonText};
    border: none;
  }

  @media screen and (max-width: 768px) {
    padding-top: 72px;

    p {
      width: 100%;
      line-height: 1.33;
    }

    button {
      width: 100%;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    padding-top: 160px;
  }
  @media screen and (min-width: 769px) {
    p {
      max-width: 592px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.55;
    }

    button {
      display: block;
      margin-left: auto;
      margin-right: auto;
      padding-left: 56px;
      padding-right: 56px;
    }
  }

  @media screen and (min-width: 1441px) {
    padding-top: 140px;

    button {
      transition: 250ms linear;
    }

    button:hover,
    button:focus {
      background-color: ${theme.background.buttonHover};
    }
  }
`;
