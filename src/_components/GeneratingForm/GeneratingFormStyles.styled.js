import styled from "styled-components";
import { Form } from "formik";


export const GeneratingFormStyles = styled(Form)`
    width: 384px;

    display: flex;
    flex-direction: column;
    row-gap: 24px;

    h2 {
        font-size: 16px; 
        margin-bottom : 8px;
    }

    .text-count-trying{
        font-weight : 400;
        font-size : 12px;
        line-height : 1.33;
        letter-spacing : 0%;
        color : rgb(97,97,97)
    }

`