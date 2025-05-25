import styled from "styled-components";

export const ProfileFolderListStyles = styled.ul`
  margin-top: 24px;
  display: flex;
  column-gap: 32px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    row-gap: 16px;
  }

  @media screen and (min-width: 769px) {
    row-gap: 24px;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    column-gap: 20px;
  }

  @media screen and (min-width: 1441px) {
    column-gap: 32px;
  }
`;
