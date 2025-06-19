import styled, { keyframes } from "styled-components";

const rotation = keyframes`
     to {
      transform: rotate(1turn);
    }
`;

export const LoadingSpinnerStyles = styled.div`
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: ${rotation} 1s infinite linear;

  @media screen and (max-width: 768px) {
    width: ${({ $width }) => `${$width}px`};
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: ${({ $width }) => `${$width + 8}px`};
  }

  @media screen and (min-width: 1441px) {
    width: ${({ $width }) => `${$width + 24}px`};
  }
`;
