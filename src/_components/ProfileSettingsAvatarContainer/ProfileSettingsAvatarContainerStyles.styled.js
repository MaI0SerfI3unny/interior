import styled from "styled-components";

export const ProfileSettingsAvatarContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 8px;
  }

  input {
    display: none;
  }

  button {
    font-style: "Manrope", sans-serif;
    color: rgb(0, 103, 201);
    font-size: 14px;
    line-height: 1.3;
    border: none;
  }
`;
