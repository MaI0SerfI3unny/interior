import styled from "styled-components";
import { theme } from "../../../assets/constants/themeColors";

export const FooterIconButtonStyles = styled.button`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 48px;
    height: 48px;
    background-color : ${theme.background.secondaryButton};
    border: none;
    border-radius : 4px;
    cursor : pointer;
`