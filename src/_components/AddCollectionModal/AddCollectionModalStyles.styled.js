import styled from "styled-components";

export const AddCollectionModalStyles = styled.div`
  padding-top: 48px;
  padding-bottom: 40px;
  position: relative;
  text-align: center;

  h1 {
    margin-bottom: 40px;
    font-size: 20px;
  }
  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    border: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 40px;
  }

  @media screen and (min-width: 769px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
