import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileEmailNotificationModalStyles = styled.div`
  padding-top: 48px;
  background-color: rgb(244, 241, 236);
  text-align: center;

  .notification {
    color: ${theme.typography.primary};
    font-family: "Manrope", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
  }

  .go-mail-btn {
    background-color: ${theme.background.button};
    color: ${theme.typography.buttonText};
    border: none;
    width: 100%;
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.33;
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    width: 320px;
    height: 70%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    .notification {
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 769px) {
    width: 450px;
    height: 70%;
    padding-left: 40px;
    padding-right: 48px;
    padding-bottom: 40px;

    .notification {
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 1441px) {
    .go-mail-btn {
      transition: 250ms linear;
    }

    .go-mail-btn:hover,
    .go-mail-btn:focus {
      background-color: ${theme.background.buttonHover};
    }
  }
`;
