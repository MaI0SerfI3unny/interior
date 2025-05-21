import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSubscribeCurrentInfoStyles = styled.div`
  margin-bottom: 72px;

  h3 {
    font-weight: 600;
    color: ${theme.typography.primary};
    font-size: 40px;
    line-height: 1.2;
  }

  .change-btn {
    display: block;
    margin-left: auto;
    border: none;
    color: ${theme.typography.secondaryAction};
    font-size: 16px;
    line-height: 1.2;
  }

  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 20px;
  }

  .info-container {
    display: flex;
    column-gap: 90px;
  }

  h4 {
    color: ${theme.typography.secondarySmallText};
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.33;
  }

  p {
    font-weight: 600;
    line-height: 1.33;
    color: ${theme.typography.primary};
  }

  .status {
    display: flex;
    align-items: center;
    column-gap: 6px;
  }

  .status::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: rgb(0, 201, 54);
    border-radius: 50%;
  }

  .cancel-btn {
    border: none;
    font-size: 16px;
    line-height: 1.33;
    color: rgb(231, 51, 27);
  }

  @media screen and (min-width: 1441px) {
    .change-btn,
    .cancel-btn {
      position: relative;
    }

    .change-btn:hover::after,
    .change-btn:focus::after,
    .cancel-btn:focus::after,
    .cancel-btn:hover::after {
      opacity: 1;
    }

    .change-btn::after,
    .cancel-btn::after {
      transition: 250ms linear;
    }

    .change-btn::after,
    .cancel-btn::after {
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

    .cancel-btn::after {
      background-color: rgb(231, 51, 27);
    }
  }
`;
