import styled from "styled-components";

export const LoadingComponentStyles = styled.div`
  text-align: center;
  background-image: url(${({ $picture }) => $picture});
  background-size: cover;
  background-position: center;
  h2 {
    color: rgb(254, 253, 252);
    line-height: 1.25;
  }

  @media screen and (max-width: 768px) {
    padding: 77px 16px;

    h2 {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    padding: 107px 143px;
    h2 {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1441px) {
    padding: 211px 191px 279px 191px;

    h2 {
      font-size: 28px;
    }
  }
`;
