import styled from "styled-components";

export const ProfileAllGenerationListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    column-gap: 20px;
  }

  @media screen and (max-width: 1440px) {
    row-gap: 24px;
  }

  @media screen and (min-width: 1441px) {
    gap: 32px;
  }
`;
