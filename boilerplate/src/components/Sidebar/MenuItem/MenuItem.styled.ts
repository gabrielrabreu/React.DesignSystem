import styled, { type CSSObject } from "@emotion/styled";

interface StyledMenuItemProps {
  rootStyles?: CSSObject;
}

export const StyledMenuItem = styled.li<StyledMenuItemProps>`
  width: 100%;
  position: relative;

  a {
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;
    padding-right: 20px;
    padding-left: 20px;

    &.active {
      background-color: #e2eef9;
    }

    &:hover {
      background-color: #f3f3f3;
    }
  }

  ${({ rootStyles }) => rootStyles};
`;

interface StyledMenuItemIconProps {
  rootStyles?: CSSObject;
}

export const StyledMenuItemIcon = styled.span<StyledMenuItemIconProps>`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  ${({ rootStyles }) => rootStyles};
`;

interface StyledMenuItemLabelProps {
  rootStyles?: CSSObject;
}

export const StyledMenuItemLabel = styled.span<StyledMenuItemLabelProps>`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ rootStyles }) => rootStyles};
`;
