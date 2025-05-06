import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const AddRoomCardStyles = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  img {
    width: 116px;
    height: 92px;
    display: block;
  }

  .text-container {
    text-align: start;
    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.33;
      color: ${theme.typography.primary};
    }
    p {
      font-size: 12px;
      line-height: 1.25;
      color: ${theme.typography.secondarySmallText};
    }
  }
`;
