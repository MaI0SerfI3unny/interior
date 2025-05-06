import styled from "styled-components";

export const GeneralModalStyles = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(113, 113, 113, 0.7);
  z-index: 999;
  overflow: hidden;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  }
`;
