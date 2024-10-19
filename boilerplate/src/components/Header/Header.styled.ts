import styled, { type CSSObject } from "@emotion/styled";

interface StyledHeaderProps {
  rootStyles?: CSSObject;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #efefef;

  ${({ rootStyles }) => rootStyles}
`;

interface StyledHeaderContainerProps {
  backgroundColor?: string;
}

export const StyledHeaderContainer = styled.div<StyledHeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ backgroundColor }) =>
    backgroundColor ? `background-color:${backgroundColor};` : ""}
`;
