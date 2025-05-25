import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSubscribeContainerStyles = styled.div`
  h2,
  h3,
  p,
  button {
    font-family: "Manrope", sans-serif;
  }

  h2 {
    font-weight: 600;
    line-height: 1.33;
    color: ${theme.typography.primary};
    margin-bottom: 24px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 769px) {
    h2 {
      font-size: 20px;
    }
  }
`;
