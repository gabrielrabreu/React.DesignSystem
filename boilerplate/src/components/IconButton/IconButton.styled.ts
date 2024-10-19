import styled, { type CSSObject } from "@emotion/styled";

interface StyledIconButtonProps {
  rootStyles?: CSSObject;
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f3f3f3;
  }

  ${({ rootStyles }) => rootStyles}
`;
