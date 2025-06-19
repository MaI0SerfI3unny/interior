import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileAllGenerationsHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  p,
  h2 {
    font-family: "Manrope", sans-serif;
  }

  h2 {
    text-transform: uppercase;
    line-height: 1.33;
    color: ${theme.typography.primary};
  }

  p {
    color: ${theme.typography.secondarySmallText};
    line-height: 1.33;
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 769px) {
    h2 {
      font-size: 28px;
    }
  }

  @media screen and (min-width: 1441px) {
    margin-top: 80px;
  }
`;
