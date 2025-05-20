import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSubscribeCardStyles = styled.div`
  background-color: ${({ $isCurrentPlan }) =>
    $isCurrentPlan ? "rgb(224,224,224)" : "rgb(254,253,252)"};
  padding: 24px;

  h3,
  p,
  button {
    font-family: "Manrope", sans-serif;
  }

  h3 {
    text-transform: uppercase;
    font-size: 40px;
    line-height: 1.2;
    color: ${theme.typography.primary};
    margin-bottom: 32px;
    font-weight: 600;
  }

  .price {
    font-weight: 700;
    font-size: 48px;
    line-height: 1.2;
    color: ${theme.typography.primary};
    font-family: "Cormorant", sans-serif;
    margin-bottom: 32px;
  }

  .price > span {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    font-family: "Manrope", sans-serif;
  }

  .plan-btn {
    color: ${theme.typography.buttonText};
    font-weight: 600;
    font-size: 16px;
    line-height: 1.33;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 16px;
    width: 100%;
    border: none;
    border-radius: 4px;
    margin-bottom: 24px;
  }

  .plan-btn:not(:disabled) {
    background-color: ${theme.background.button};
  }

  .plan-btn:disabled {
    background-color: rgb(138, 138, 146);
  }

  hr {
    border: none;
    height: 1px;
    background-color: rgb(223, 218, 214);
    margin-bottom: 24px;
  }

  .privelegies-title,
  li {
    line-height: 1.33;
    color: ${theme.typography.primary};
  }

  .privelegies-title {
    margin-bottom: 16px;
  }

  li {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  li:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1441px) {
    .plan-btn {
      transition: 250ms linear;
    }

    .plan-btn:not(:disabled):hover,
    .plan-btn:not(:disabled):focus {
      background-color: ${theme.background.buttonHover};
    }
  }
`;
