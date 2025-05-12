import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileAllGenerationsModalRequestInfoStyles = styled.div`
  text-align: left;

  h3 {
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    line-height: 1.33;
    color: ${theme.typography.primary};
    margin-bottom: 8px;
    font-weight: 400;
  }

  .small-container,
  .prompt-header {
    font-family: "Manrope", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .prompt-container {
    margin-top: 32px;
  }

  .prompt-header > button {
    border: none;
    background-color: transparent;
    padding: 4px;
    border-radius: 4px;
  }

  .prompt-container > button {
    font-size: 14px;
    line-height: 1.3;
    font-family: "Manrope", sans-serif;
    color: ${theme.typography.secondaryAction};
    border: none;
    margin-left: auto;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .prompt-container > button > svg {
    transition: 250ms linear;
    transform: ${({ $isShowMoreInfo }) =>
      $isShowMoreInfo ? "rotate(180deg)" : "rotate(0)"};
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: ${theme.typography.secondarySmallText};
  }

  p {
    color: ${theme.typography.primary};
    line-height: 1.33;
  }
  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .photo-container {
      margin-bottom: 40px;
    }
    img {
      height: 240px;
    }

    .small-container {
      margin-bottom: 8px;
    }
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    display: flex;
    column-gap: 40px;
    img {
      height: 236px;
    }

    .photo-container {
      width: 50%;
    }

    .text-container {
      width: 50%;
    }
    .small-container {
      margin-bottom: 12px;
    }
  }

  @media screen and (min-width: 1441px) {
    width: 312px;

    img {
      height: 170px;
    }

    .photo-container {
      margin-bottom: 32px;
    }

    .small-container {
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1441px) {
    .prompt-header > button {
      transition: 250ms linear;
    }
    .prompt-header > button:hover {
      background-color: rgb(223, 218, 214);
    }
  }
`;
