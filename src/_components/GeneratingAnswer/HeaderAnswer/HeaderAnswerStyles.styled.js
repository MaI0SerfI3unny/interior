import styled from "styled-components";


export const HeaderAnswerStyles = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : flex-end;
    width : 100%;
    margin-bottom : 8px;

   .text-count, .count {
    font-size : 16px;
    line-height : 1.33;
    letter-spacing : 0;
    
   }

   .text-count {
    font-weight : 600;
    color : rgb(29,28,32)

   }


   .right-side-container {
        padding-left: 20px;
        border : 1px solid rgb(238,239,243);
        border-radius : 12px;

        display: flex;
        align-items : center;
        column-gap : 16px;
        
    }


   .count {
    font-weight : 700;
    color : rgb(64,64,64)

   }


    .count-container {
        display : flex;
        align-items : center;
        column-gap : 4px;
        
    }

    .generate-icon {
        width: 24px;
        height: 24px;
        display : flex;
        justify-content: center;
        align-items : center;
    }
`