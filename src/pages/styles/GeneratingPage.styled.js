import styled from "styled-components";

export const GeneratingPageStyles = styled.main`
width : 100%;

.container {
    display : flex;
}

@media screen and (max-width : 360px) {
    padding-top: 144px;
    padding-bottom: 40px;

.container {
    gap : 24px 0px;
}
}
@media screen and (max-width : 768px) {
    .container {
    flex-direction : column-reverse;
}
}


@media screen and (min-width : 361px) and (max-width: 768px) {
    padding-top: 156px;
    padding-bottom: 60px;

    .container {
        gap : 32px 0px;
    }
}


@media screen and (min-width : 769px) {
    padding-top: 176px;
    padding-bottom: 80px;


    .container {
    gap : 0px 32px;
}
}



`