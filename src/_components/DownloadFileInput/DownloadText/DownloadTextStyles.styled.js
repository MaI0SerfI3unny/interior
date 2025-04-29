import styled from "styled-components"
import { theme } from "../../../assets/constants/themeColors"

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
        color: ${theme.typography.secondaryAction};
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
        color: ${theme.typography.smallText};
        line-height : 1.33;
        letter-spacing: 0%;
    }
`