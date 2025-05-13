import styled from "styled-components";

export const ProfileGenerationItemStyles = styled.li`
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  .more-info-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: none;
    opacity: 0;
    transition: 250ms linear;
    width: 40px;
    height: 40px;
  }

  &:hover .more-info-btn,
  &:focus .more-info-btn {
    opacity: 1;
  }

  .download-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 11px;
    bottom: 11px;
    border: none;
    background-color: rgba(249, 250, 250, 0.8);
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 320px;

    .download-btn {
      width: 40px;
      height: 40px;
    }

    .download-btn > svg {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (min-width: 769px) {
    .download-btn {
      width: 32px;
      height: 32px;
    }

    .download-btn > svg {
      width: 19px;
      height: 19px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: calc((100% - 20px) / 2);
    height: 342px;
  }

  @media screen and (min-width: 1441px) {
    width: calc((100% - 96px) / 4);
    height: 280px;
  }

  .download-btn {
    transition: 250ms linear;
  }

  .download-btn:hover,
  .download-btn:focus {
    background-color: rgba(223, 218, 214, 1);
  }
`;
