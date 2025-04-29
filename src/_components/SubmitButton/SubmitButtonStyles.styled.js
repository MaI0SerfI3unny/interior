import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const SubmitButtonStyles = styled.button`
    width : 100%;
    background-color : ${theme.background.button};
    border : none;
    border-radius : 4px; 
    display : flex;
    column-gap: 12px;
    justify-content : center;
    align-items: center;
    padding-top: 12px;
    padding-bottom : 12px;
    cursor : pointer;

    font-weight : 700;
    font-size : 16px;
    line-height : 1.33;
    letter-spacing : 0%;
    color: ${theme.typography.buttonText};
`