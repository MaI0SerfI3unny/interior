import styled from "styled-components";

export const MainContainerStyles = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 60vh;

  @media screen and (max-width: 768px) {
    width: 360px;
    padding: 0px 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 768px;
    padding: 0px 32px;
  }

  @media screen and (min-width: 1441px) {
    width: 1440px;
    padding: 0px 112px;
  }
`;
