import styled from "styled-components";
import { theme } from "../../../assets/constants/themeColors";

export const DownloadTextContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 4px;

  .text-container {
    display: flex;
    flex-direction: column;
  }
  .download-text {
    color: ${theme.typography.secondaryAction};
    line-height: 1.33;
    font-size: 14px;
  }

  .drag-text {
    color: ${theme.typography.primary};
    line-height: 1.33;
    font-size: 14px;
  }

  .format {
    font-size: 12px;
    line-height: 1.25;
    color: ${theme.typography.smallText};
  }
`;
