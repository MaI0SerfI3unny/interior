import styled from "styled-components";

export const ProfileNavbarStyles = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 40px;

  ul {
    display: flex;
    align-items: center;
    /* width: 100%; */
    justify-content: space-between;

    a {
      color: #706d6a;
      font-size: 16px;
      font-weight: 400;
      font-family: Manrope, sans-serif;
      &:hover {
        color: #2b2a29;
        transition: 0.5s;
      }

      &.active {
        color: #2b2a29;
        font-weight: 600;
        text-underline-offset: 10px;
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
    ul {
      column-gap: 16px;
      width: 100%;
    }

    hr {
      display: none;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 769px) {
    ul {
      column-gap: 40px;
      min-width: 424px;
    }
    hr {
      width: 100%;
      background: #bfb9b4;
      height: 1px;
      border: none;
    }
  }

  @media screen and (min-width: 1441px) {
    margin-bottom: 48px;
  }
`;
