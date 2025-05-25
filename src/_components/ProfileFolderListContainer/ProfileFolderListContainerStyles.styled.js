import styled from "styled-components";

export const ProfileFolderListContainerStyles = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Manrope, sans-serif;
    color: #2b2a29;
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.33;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 769px) {
    font-size: 28px;
  }
`;
