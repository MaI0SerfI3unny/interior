import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSettingsEmptyAvatarStyles = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: rgb(223, 218, 214);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Manrope", sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.2;
    color: ${theme.typography.primary};
  }
`;
