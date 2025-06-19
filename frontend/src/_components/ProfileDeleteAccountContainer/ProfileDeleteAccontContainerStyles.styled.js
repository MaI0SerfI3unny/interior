import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileDeleteAccountContainerStyles = styled.div`
  h3 {
    font-family: "Manrope", sans-serif;
    font-size: 20px;
    line-height: 1.4;
    color: ${theme.typography.primary};
    margin-bottom: 24px;
  }

  h4 {
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: ${theme.typography.primary};
    margin-bottom: 8px;
  }
  .info-btn-container {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  p {
    font-family: "Manrope", sans-serif;
    line-height: 1.3;
    color: rgb(112, 109, 106);
  }

  button {
    font-family: "Manrope", sans-serif;
    background-color: transparent;
    border: none;
    font-size: 16px;
    line-height: 1.33;
    color: rgb(231, 51, 27);
  }

  @media screen and (max-width: 768px) {
    h4 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 769px) {
    h4 {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1441px) {
    button {
      position: relative;
    }
    button:hover::after,
    button:focus::after {
      opacity: 1;
    }

    button::after {
      transition: 250ms linear;
    }

    button::after {
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
