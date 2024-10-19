import { createContext, useContext } from "react";
import { type CSSObject } from "@emotion/styled";

interface MenuItemStyles {
  icon?: CSSObject;
  label?: CSSObject;
}

interface MenuContextProps {
  menuItemStyles?: MenuItemStyles;
}

const MenuContext = createContext<MenuContextProps>({});

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuContextProvider.");
  }
  return context;
};

export default MenuContext;
