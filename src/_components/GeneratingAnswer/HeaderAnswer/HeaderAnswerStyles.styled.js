import styled from "styled-components";
import { theme } from "../../../assets/constants/themeColors";


export const HeaderAnswerStyles = styled.div`
    display : flex;
    justify-content : flex-end;
    align-items : flex-end;
    width : 100%;
    margin-bottom : 8px;
    margin-top: -28px;




   .right-side-container {
        padding-left: 20px;
        border : 1px solid ${theme.buttonBorder};
        border-radius : 12px;
        
        background-color: white;

        display: flex;
        align-items : center;
        column-gap : 16px;
        
    }


   .count {
    font-weight : 700;
    color : rgb(64,64,64);


   }


    .count-container {
        display : flex;
        align-items : center;
        column-gap : 4px;
        background-color: white;

        
    }

    .generate-icon {
        width: 24px;
        height: 24px;
        display : flex;
        justify-content: center;
        align-items : center;
    }
`