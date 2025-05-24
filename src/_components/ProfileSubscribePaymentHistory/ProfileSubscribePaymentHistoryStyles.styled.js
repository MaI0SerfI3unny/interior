import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSubscribePaymentHistoryStyles = styled.div`
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }

  tr {
    height: 40px;
    border-top: none;
    border-bottom: 1px solid rgb(233, 218, 214);
  }

  th {
    font-weight: 400;
    font-family: "Manrope", sans-serif;
    line-height: 1.33;
    color: ${theme.typography.placeholders};
  }

  td {
    font-family: "Manrope", sans-serif;
    line-height: 1.33;
    color: ${theme.typography.primary};
  }

  td:last-child,
  th:last-child {
    text-align: end;
  }

  .accepted {
    color: rgb(0, 201, 54);
  }

  .error {
    color: rgb(231, 51, 27);
  }

  button {
    border: none;
    color: ${theme.typography.secondaryAction};
    line-height: 1.2;
  }

  @media screen and (max-width: 768px) {
    table,
    button {
      font-size: 12px;
    }

    button > span {
      display: none;
    }
  }
  @media screen and (min-width: 769px) {
    table {
      font-size: 16px;
    }

    button > svg {
      display: none;
    }
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
