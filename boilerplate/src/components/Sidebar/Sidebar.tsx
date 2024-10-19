import { type FC, type HTMLAttributes } from "react";
import { type CSSObject } from "@emotion/styled";

import Menu from "./Menu/Menu";
import MenuItem from "./MenuItem/MenuItem";

import { StyledSidebar, StyledSidebarContainer } from "./Sidebar.styled";

interface SidebarProps extends HTMLAttributes<HTMLHtmlElement> {
  backgroundColor?: string;
  collapsed?: boolean;
  collapsedWidth?: string;
  rootStyles?: CSSObject;
  transitionDuration?: number;
  width?: string;
}

interface SidebarType extends FC<SidebarProps> {
  Menu: typeof Menu;
  MenuItem: typeof MenuItem;
}

const Sidebar: SidebarType = ({
  backgroundColor,
  children,
  collapsedWidth = "80px",
  transitionDuration = 300,
  width = "250px",
  ...rest
}) => {
  return (
    <StyledSidebar
      collapsedWidth={collapsedWidth}
      transitionDuration={transitionDuration}
      width={width}
      {...rest}
    >
      <StyledSidebarContainer backgroundColor={backgroundColor}>
        {children}
      </StyledSidebarContainer>
    </StyledSidebar>
  );
};

Sidebar.Menu = Menu;
Sidebar.MenuItem = MenuItem;

export default Sidebar;
