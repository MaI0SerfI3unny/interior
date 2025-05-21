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
    font-size: 20px;
    line-height: 1.33;
    color: ${theme.typography.primary};
    margin-bottom: 24px;
  }
`;
