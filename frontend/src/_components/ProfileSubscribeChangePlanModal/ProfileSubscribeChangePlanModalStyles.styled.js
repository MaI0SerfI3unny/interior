import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSubscribeChangePlanModalStyles = styled.div`
  padding-bottom: 40px;
  background-color: rgb(244, 241, 236);

  h2,
  p,
  button {
    font-family: "Manrope", sans-serif;
  }

  h2,
  .description {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.33;
    color: ${theme.typography.primary};
    margin-bottom: 12px;
  }

  .description {
    font-size: 14px;
    line-height: 1.3;
    color: ${theme.typography.placeholders};
    margin-bottom: 32px;
  }

  .cards-container {
    display: flex;
    column-gap: 24px;
  }

  .cancel-btn {
    border: none;
    font-size: 16px;
    line-height: 1.33;
    color: rgb(231, 51, 27);
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
  }

  @media screen and (max-width: 768px) {
    min-width: 320px;

    .description {
      max-width: 240px;
    }

    .cards-container {
      flex-direction: column;
      row-gap: 32px;
    }
  }

  @media screen and (max-width: 1440px) {
    padding-top: 56px;
  }

  @media screen and (min-width: 769px) {
    .description {
      max-width: 488px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    min-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1441px) {
    min-width: 872px;
    padding-top: 48px;
    padding-right: 40px;
    padding-left: 40px;

    .cancel-btn {
      position: relative;
    }

    .cancel-btn:hover::after,
    .cancel-btn:focus::after {
      opacity: 1;
    }

    .cancel-btn::after {
      transition: 250ms linear;
    }

    .cancel-btn::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: rgb(231, 51, 27);
      opacity: 0;
    }
  }
`;
