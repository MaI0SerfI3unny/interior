import styled from "styled-components";

export const ProfileFolderItemStyles = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  column-gap: 2px;
  overflow: hidden;
  border-radius: 4px;

  .left {
    height: 100%;
    width: 65%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;
    row-gap: 2px;

    .top,
    .bottom {
      width: 100%;
      height: 50%;

      img {
        width: 100%;
        height: 100%;
      }

      &.placeholder {
        background-color: rgb(223, 218, 214);
      }
    }
  }
`;
