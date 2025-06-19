import styled from "styled-components";
import { theme } from "../../assets/constants/themeColors";

export const AddRoomCardStyles = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  column-gap: 16px;
  background-color: ${({ $selectedFolder, $value }) =>
    $selectedFolder === $value ? "rgb(223,218,214)" : "inherit"};

  @media screen and (min-width: 1441px) {
    &:hover {
      background-color: rgb(243, 242, 241);
    }
  }

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
