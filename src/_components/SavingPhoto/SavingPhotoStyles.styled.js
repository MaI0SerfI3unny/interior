import styled from "styled-components";

export const SavingPhotoStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: rgb(244, 241, 236);
  border-radius: 4px;
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 201, 54);
  }

  @media screen and (max-width: 1440px) {
    row-gap: 16px;

    .icon-container {
      width: 48px;
      height: 48px;
    }

    .icon-container > svg {
      width: 36px;
      height: 36px;
    }
  }

  @media screen and (min-width: 1441px) {
    row-gap: 32px;

    .icon-container {
      width: 64px;
      height: 64px;
    }

    .container > svg {
      width: 48px;
      height: 48px;
    }
  }
`;
