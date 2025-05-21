import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSubscribePaymentDetailsStyles = styled.div`
  margin-bottom: 32px;

  .payment-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  h3,
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.33;
  }

  h3 {
    color: ${theme.typography.primary};
    margin-bottom: 8px;
  }

  p {
    color: ${theme.typography.placeholders};
  }

  .card-container {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  button {
    border: none;
    color: ${theme.typography.secondaryAction};
    font-size: 16px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1441px) {
    button {
      position: relative;
    }

    button:hover::after,
    button:focus::after {
      opacity: 1;
    }

    button::after {
      transition: 250ms linear;
    }

    button::after {
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
