import styled from "styled-components";
import { theme } from "../../../../assets/constants/themeColors";

export const SaveResultButtonStyles = styled.button`
    padding : ${({$pdS}) => `12px ${$pdS}px`};
    background-color : ${theme.background.button};
    color : ${theme.typography.buttonText};
    font-weight : 600;
    line-height : 1.33;
    border : none;
    border-radius : 4px;
    cursor : pointer;
`