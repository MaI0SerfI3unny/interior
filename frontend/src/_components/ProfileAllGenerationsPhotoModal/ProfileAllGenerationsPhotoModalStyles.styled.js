import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileAllGenerationsPhotoModalStyles = styled.div`
  background-color: rgb(244, 241, 236);
  border-radius: 4px;
  text-align: center;

  h2 {
    color: ${theme.typography.primary};
    font-family: "Manrope", sans-serif;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .content-container {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    padding: 56px 24px 23px 24px;
    width: 360px;

    h2 {
      font-size: 28px;
      margin-bottom: 32px;
    }

    .content-container {
      row-gap: 24px;
    }
  }

  @media screen and (max-width: 1440px) {
    .content-container {
      flex-direction: column-reverse;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 704px;

    .content-container {
      row-gap: 40px;
    }
  }

  @media screen and (min-width: 769px) {
    padding: 48px 32px;

    h2 {
      font-size: 40px;
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 1441px) {
    width: 1072px;

    .content-container {
      column-gap: 32px;
    }
  }
`;
