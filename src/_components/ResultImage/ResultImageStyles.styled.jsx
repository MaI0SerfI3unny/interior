import styled from "styled-components";

export const ResultImageStyles = styled.img`
  width: 100%;
  /* background-image: url(${({ $resultImage }) => $resultImage});
  background-size: cover;
  background-position: center; */

  @media screen and (max-width: 768px) {
    height: 254px;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    height: 342px;
  }

  @media screen and (min-width: 1440px) {
    height: 638px;
  }
`;
