import styled from "styled-components"


export const DownloadTextContainer = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap : wrap;

    svg {
        margin-right : 8px;
    }

    div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .download-text {
        color: rgb(29, 98,236);
        line-height : 1.33;
        letter-spacing: 0%;
        margin-left: 0.5px;
    }

    .drag-text {
        font-weight: 600;
        line-height : 1.33;
        letter-spacing: 0%;

    }

    .format {
        font-size: 12px;
        color: rgb(97,102,122);
        line-height : 1.33;
        letter-spacing: 0%;
    }
`