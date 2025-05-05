import styled from "styled-components";

export const ModalExitStyles = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(113, 113, 113, 0.7);

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25%;
    height: 50%;
    padding: 40px 34px;

    background-color: white;
    border-radius: 8px;
  }

  .title-text {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: rgb(29, 28, 32);
    margin-bottom: 40px;
  }

  .catalog-container {
    width: 100%;
    height: 238px;
    border: 1px solid black;
    margin-bottom: 32px;
  }

  .buttons-container {
    display: flex;
    column-gap: 32px;
    justify-content: space-between;
  }
`;
