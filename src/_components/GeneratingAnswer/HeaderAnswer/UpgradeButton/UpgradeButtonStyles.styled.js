import styled from "styled-components";
import {theme} from '../../../../assets/constants/themeColors'

export const UpgradeButtonStyles = styled.button`
    font-weight : 600;
    font-size : 16px;
    line-height : 1.33;
    letter-spacing: 0;

    padding : 12px 24px;
    background-color : ${theme.background.button};
    border : none;
    border-radius : 4px;
    cursor: pointer;

    color : ${theme.typography.buttonText}
`