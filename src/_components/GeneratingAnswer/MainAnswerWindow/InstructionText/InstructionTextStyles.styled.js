import styled from "styled-components";
import { theme } from "../../../../assets/constants/themeColors";

export const InstructionTextStyles = styled.div`
  background-color: white;

  .title {
    font-weight: 600;
    line-height: 1.25;
    text-align: center;
    margin-bottom: 24px;
  }

  .instruction-title {
    line-height: 1.33;
    color: ${theme.typography.titleText};
    margin-bottom: 64px;
  }

  .instruction-list {
    font-size: 18px;
    line-height: 1.2;
    color: ${theme.typography.primary};

    list-style: none;
    counter-reset: item;
    padding-left: 0;
  }

  li {
    counter-increment: item;
    position: relative;
    padding-left: 40px;
  }

  li::before {
    content: counter(item, decimal-leading-zero) "/";
    position: absolute;
    left: 0;
    color: ${theme.typography.secondarySmallText};
    font-size: 20px;
    line-height: 1.33;
  }

  li:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 768px) {
    padding: 32px 16px;

    .title {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 1440px) {
    .title {
      font-size: 28px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    padding: 102px 56px 149px 56px;
  }

  @media screen and (min-width: 1441px) {
    padding: 92px 104px 214px 104px;
  }
`;
