import styled from "styled-components";

export const FooterAnswerStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
