import styled, { type CSSObject } from "@emotion/styled";

interface StyledSidebarProps {
  collapsed?: boolean;
  collapsedWidth?: string;
  rootStyles?: CSSObject;
  transitionDuration?: number;
  width?: string;
}

export const StyledSidebar = styled.aside<StyledSidebarProps>`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: ${({ transitionDuration }) =>
    `width, left, right, ${transitionDuration}ms`};

  width: ${({ width }) => width};
  min-width: ${({ width }) => width};

  ${({ collapsed, collapsedWidth }) =>
    collapsed &&
    `
    width: ${collapsedWidth};
    min-width: ${collapsedWidth};
  `}

  ${({ rootStyles }) => rootStyles}
`;

interface StyledSidebarContainerProps {
  backgroundColor?: string;
}

export const StyledSidebarContainer = styled.div<StyledSidebarContainerProps>`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  ${({ backgroundColor }) =>
    backgroundColor ? `background-color:${backgroundColor};` : ""}
`;
