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
  }
`;
