import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileFolderDescriptionStyles = styled.div`
  h3,
  p {
    font-family: "Manrope", sans-serif;
    line-height: 1.33;
  }

  h3 {
    font-weight: 600;
    color: ${theme.typography.primary};
  }

  p {
    font-size: 16px;
    color: ${theme.typography.secondarySmallText};
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 769px) {
    h3 {
      font-size: 20px;
    }
  }
`;
