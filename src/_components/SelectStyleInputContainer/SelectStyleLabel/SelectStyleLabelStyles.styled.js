import styled from "styled-components";

export const SelectStyleLabelStyles = styled.label`
width : calc((100% - 32px) / 2);
padding: 8px 16px;
border: 1px solid rgb(238,239,243);
border-radius : 8px;
background-color: ${({ $selectedValue}) =>  $selectedValue ? 'rgb(238,239,243)' : 'white'  };

font-size : 14px;
line-height : 130%;
letter-spacing : 0%;

display : flex;
align-items: center;
column-gap: 7px;

cursor: pointer;
`