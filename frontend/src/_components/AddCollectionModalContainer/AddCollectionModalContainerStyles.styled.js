import styled from "styled-components";

export const AddCollectionModalContainerStyles = styled.div`
  padding-top: 48px;
  padding-bottom: 40px;
  position: relative;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 40px;
  }

  @media screen and (min-width: 769px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  background-color: ${({ $styleSizes }) => $styleSizes.bgC};
  border-radius: ${({ $styleSizes }) => $styleSizes.brdRad};
  border: ${({ $styleSizes }) => $styleSizes.border};
  overflow: auto;

  @media screen and (max-width: 768px) {
    width: ${({ $styleSizes }) => $styleSizes.mobileWidth};
    height: ${({ $styleSizes }) => $styleSizes.mobileHeight};
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    width: ${({ $styleSizes }) => $styleSizes.tabletWidth};
    height: ${({ $styleSizes }) => $styleSizes.tabletHeight};
  }

  @media screen and (min-width: 1441px) {
    width: ${({ $styleSizes }) => $styleSizes.desktopWidth};
    height: ${({ $styleSizes }) => $styleSizes.desktopHeight};
  }
`;
