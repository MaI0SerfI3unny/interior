import styled from "styled-components";
import { Form } from "formik";
import { theme } from "../../assets/constants/themeColors";

export const GeneratingFormStyles = styled(Form)`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 8px;
    font-weight: 400;
    color: ${theme.typography.titleFormContainer};
  }

  .text-count-trying {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0%;
    color: rgb(97, 97, 97);
  }

  @media screen and (max-width: 768px) {
    row-gap: 16px;

    h2 {
      font-size: 12px;
      line-height: 1.25;
    }
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    row-gap: 20px;
  }

  @media screen and (min-width: 1441px) {
    width: 384px;
    row-gap: 28px;
    h2 {
      font-size: 14px;
      line-height: 1.33;
    }
  }
`;
