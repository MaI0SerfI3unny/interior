import styled from "styled-components";


export const SelectElementContainerStyles = styled.div`
    select {
       
        appearance: none;      
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
        width : 100%;
        padding : 14px 16px;
        border: 1px solid rgb(238,239,243);
        border-radius : 4px;
        font-size : 14px;
    line-height : 1.6;
    color : rgb(142,145,160);
    outline : none;

    }
`

export const ArrowContainer = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none; 
  align-items: center;
  justify-content: center;
`;

export const SelectWrapper = styled.div`
    position: relative;
`