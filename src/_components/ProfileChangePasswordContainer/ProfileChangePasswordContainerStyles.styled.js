import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileChangePasswordContainerStyles = styled.div`
  position: relative;
  h3 {
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    color: ${theme.typography.primary};
    margin-bottom: 8px;
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

  .placeholder {
    font-family: "Manrope", sans-serif;
    line-height: 1.33;
    color: rgb(112, 109, 106);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;

    .input-container {
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 769px) {
    margin-bottom: 24px;

    h3 {
      font-size: 14px;
      line-height: 1.33;
    }

    hr {
      margin-top: 16px;
    }
  }

  @media screen and (min-width: 1441px) {
    .changing-btn::after {
      transition: 250ms linear;
    }

    .changing-btn:hover::after,
    .changing-btn:focus::after {
      opacity: 1;
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
