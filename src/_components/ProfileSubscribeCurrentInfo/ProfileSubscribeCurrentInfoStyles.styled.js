import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSubscribeCurrentInfoStyles = styled.div`
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 600;
    color: ${theme.typography.primary};
    line-height: 1.2;
    text-transform: uppercase;
  }

  .change-btn {
    border: none;
    color: ${theme.typography.secondaryAction};
    line-height: 1.2;
  }

  .info-container {
    display: flex;
    justify-content: space-between;
  }

  .status,
  .generation-count {
    display: flex;
    align-items: center;
    column-gap: 6px;
    color: ${theme.typography.primary};
    line-height: 1.33;
  }

  .status {
    font-weight: 600;
  }

  .generation-count {
  }

  .status::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: rgb(0, 201, 54);
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;

    h3 {
      font-size: 28px;
    }

    .change-btn {
      font-size: 14px;
    }

    .status,
    .generation-count {
      font-size: 14px;
    }
    .generation-count {
      text-align: end;
      max-width: 115px;
    }
  }

  @media screen and (max-width: 1440px) {
    .just-for-style {
      display: none;
    }
  }

  @media screen and (min-width: 769px) {
    .change-btn {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    margin-bottom: 32px;

    h3 {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1441px) {
    margin-bottom: 72px;

    h3 {
      font-size: 40px;
    }
    .change-btn:hover::after,
    .change-btn:focus::after {
      opacity: 1;
    }

    .change-btn::after {
      transition: 250ms linear;
    }

    .change-btn::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      opacity: 0;
    }

    .change-btn::after {
      background-color: rgb(0, 103, 201);
    }
  }
`;
