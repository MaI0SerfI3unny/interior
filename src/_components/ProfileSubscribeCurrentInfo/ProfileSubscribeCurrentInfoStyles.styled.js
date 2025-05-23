import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ProfileSubscribeCurrentInfoStyles = styled.div`
  margin-bottom: 72px;

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 600;
    color: ${theme.typography.primary};
    font-size: 40px;
    line-height: 1.2;
  }

  .change-btn {
    border: none;
    color: ${theme.typography.secondaryAction};
    font-size: 16px;
    line-height: 1.2;
  }

  .info-container {
    display: flex;
    column-gap: 316px;
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

  @media screen and (min-width: 1441px) {
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
