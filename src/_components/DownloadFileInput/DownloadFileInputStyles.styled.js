import styled from "styled-components";


export const ImagePreview = styled.img`
    position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

`

export const DownloadFileInputContainer = styled.div`
    position: relative;
    width: 100%;
    height: 179px;
    border: 1px solid rgb(238,239,243);
    padding: 36px 51.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    cursor: pointer;

`

export const DownloadFileInputStyles = styled.input`
    display : none;
`

export const DownloadIconContainer = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(29,98,236, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
`

