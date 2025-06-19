import styled from "styled-components";

export const ProfileFolderWrapperStyles = styled.li`
  cursor: pointer;
  height: 294px;

  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1441px) {
    width: calc((100% - 96px) / 4);
  }
`;
