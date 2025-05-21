import styled from "styled-components";

export const ProfileGenerationItemStyles = styled.li`
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  &:hover .overflow {
    bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .overflow {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: flex-end;
    bottom: -100%;
    height: 50%;
    padding: 8px;
    left: 0;
    font-family: "Manrope", sans-serif;
    transition: 250ms linear;
    color: rgb(244, 241, 236);
    background: linear-gradient(
      to bottom,
      rgba(5, 0, 41, 0) 0%,
      rgba(5, 0, 41, 0.9) 100%
    );
  }

  .overflow-title {
    margin-bottom: 4px;
    line-height: 1.33;
  }

  .overflow .prompt {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 1.3;
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

  @media screen and (max-width: 1440px) {
    .search-tablet {
      position: absolute;
      right: 12px;
      bottom: 12px;
      background-color: rgba(249, 250, 250, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      border-radius: 4px;
      transition: 250ms linear;
    }

    .search-tablet:hover {
      background-color: rgb(223, 218, 214);
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

    .search-tablet {
      display: none;
    }

    .download-btn {
      transition: 250ms linear;
    }

    .download-btn:hover,
    .download-btn:focus {
      background-color: rgba(223, 218, 214, 1);
    }
  }
`;
