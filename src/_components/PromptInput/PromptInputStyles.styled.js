import styled from "styled-components";
import { Field } from "formik";
import { theme } from "../../assets/constants/themeColors";

export const TextAreaPrompt = styled(Field)`
width: 100%;
height: 88px;
resize : none;
padding: 12px 16px;
border: 1px solid ${theme.buttonBorder};
border-radius: 12px;

`