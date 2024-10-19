import { type FC, type MenuHTMLAttributes } from "react";
import { type CSSObject } from "@emotion/styled";

import MenuContext from "./MenuContext";

import { StyledMenu, StyledMenuUl } from "./Menu.styled";

interface MenuItemStyles {
  icon?: CSSObject;
  label?: CSSObject;
}

interface MenuProps extends MenuHTMLAttributes<HTMLMenuElement> {
  menuItemStyles?: MenuItemStyles;
  rootStyles?: CSSObject;
}

const Menu: FC<MenuProps> = ({ children, menuItemStyles, rootStyles }) => {
  return (
    <MenuContext.Provider value={{ menuItemStyles }}>
      <StyledMenu rootStyles={rootStyles}>
        <StyledMenuUl>{children}</StyledMenuUl>
      </StyledMenu>
    </MenuContext.Provider>
  );
};

export default Menu;
