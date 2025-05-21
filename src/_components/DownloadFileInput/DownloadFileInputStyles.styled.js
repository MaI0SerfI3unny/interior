import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const ImagePreview = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const UploadPhoto = styled.div`
  @media screen and (max-width: 1440px) {
    display: none;
  }

  @media screen and (min-width: 1441px) {
    background-color: rgba(249, 250, 250, 0.8);
    display: flex;
    padding: 8px 24px;
    align-items: center;
    column-gap: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 261px;
    border-radius: 4px;
    transition: 250ms linear;

    opacity: ${({ $isHovered }) => ($isHovered ? "1" : "0")};

    p {
      font-family: "Manrope", sans-serif;
      line-height: 1.33;
      color: rgb(29, 98, 236);
    }
  }
`;

export const DownloadFileInputContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid ${theme.buttonBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  cursor: pointer;
  background-color: white;
  border-radius: 4px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 32.5px 42px;
    height: 153px;
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    padding: 119px 219.5px;
    height: 370px;
  }
  @media screen and (min-width: 1441px) {
    padding: 75px 59.5px;
    height: 254px;
  }
`;

export const DownloadFileInputStyles = styled.input`
  display: none;
`;

export const DownloadIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
