import styled from "styled-components";
import { theme } from "../../../../assets/constants/themeColors";


export const InstructionTextStyles = styled.div`
background-color: white;
padding : 100px 104px 234px 104px;

.title {
    font-weight : 600;
    font-size : 20px;
    line-height : 1.2;

    text-align: center;
    margin-bottom: 24px;
}

.instruction-title {
    line-height : 1.33;
    color : ${theme.typography.titleText};
    margin-bottom : 64px;
}

.instruction-list {
    font-size: 18px;
    line-height : 1.2;
    color : ${theme.typography.primary};

    list-style: none;      
    counter-reset: item;    
    padding-left: 0;
}

li {
    counter-increment: item;  
    position: relative;
    padding-left : 40px;
}

li::before {
  content: counter(item, decimal-leading-zero) "/";  
  position: absolute;
  left: 0;
  color: ${theme.typography.secondarySmallText};
  font-size: 20px;
  line-height : 1.33;
}

li:not(:last-child) {
    margin-bottom: 24px;
}

`