import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileChangePasswordInputStyles = styled.div`
  text-align: left;

  h3 {
    margin-bottom: 8px;
    color: ${theme.typography.primary};
    font-family: "Manrope", sans-serif;
    font-size: 14px;
    line-height: 1.33;
    font-weight: 400;
  }

  .input-container {
    position: relative;
  }

  input {
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 12px 14px;
    line-height: 1.33;
    outline: none;
  }

  input:focus {
    border: 1px solid ${theme.typography.primary};
  }

  .show-password-btn {
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
  }
`;
