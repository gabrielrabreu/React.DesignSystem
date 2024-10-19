import styled, { type CSSObject } from "@emotion/styled";

interface StyledMenuProps {
  rootStyles?: CSSObject;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
  ${({ rootStyles }) => rootStyles};
`;

export const StyledMenuUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
