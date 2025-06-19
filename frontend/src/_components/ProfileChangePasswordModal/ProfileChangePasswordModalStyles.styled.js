import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileChangePasswordModalStyles = styled.div`
  padding-top: 48px;
  height: 70%;
  background-color: rgb(244, 241, 236);
  text-align: center;
  border-radius: 4px;

  h2 {
    font-size: 20px;
    line-height: 1.4;
    font-family: "Manrope", sans-serif;
    color: ${theme.typography.primary};
    margin-bottom: 12px;
  }

  .rules {
    font-size: 14px;
    font-family: "Manrope", sans-serif;
    line-height: 1.3;
    color: rgb(112, 109, 106);
    margin-bottom: 24px;
  }

  @media screen and (max-width: 768px) {
    width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 769px) {
    width: 592px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
  }
`;
