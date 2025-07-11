import styled from "styled-components";

export const ProfileAllGenerationsPhotoModalResultStyles = styled.div`
  img {
    width: 100%;
  }

  .btns-container {
    margin-left: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    column-gap: 16px;
  }

  .btns-container > button {
    background-color: rgb(254, 253, 252);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border: 1px solid rgb(254, 253, 252);
    border-radius: 4px;
  }

  .btns-container > .delete-btn {
    background-color: ${({ $isDeleting }) =>
      $isDeleting ? "rgba(43, 42, 41, 1)" : "rgb(254, 253, 252)"};
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    row-gap: 12px;
  }

  @media screen and (min-width: 769px) {
    img {
      height: 432px;
    }
  }

  @media screen and (min-width: 1441px) {
    width: 664px;

    .btns-container {
      width: calc(48px * 2 + 16px);
      margin-top: 16px;

      button {
        transition: 250ms linear;
      }

      button:hover,
      button:focus {
        border-color: rgb(112, 109, 106);
      }
    }
  }
`;
