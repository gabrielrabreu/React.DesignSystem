import {
  type AnchorHTMLAttributes,
  type FC,
  type ReactElement,
  type ReactNode,
} from "react";
import { type CSSObject } from "@emotion/styled";

import { useMenu } from "../Menu/MenuContext";
import MenuButton from "../MenuButton/MenuButton";

import {
  StyledMenuItem,
  StyledMenuItemIcon,
  StyledMenuItemLabel,
} from "./MenuItem.styled";

interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ReactElement;
  icon?: ReactNode;
  rootStyles?: CSSObject;
}

const MenuItem: FC<MenuItemProps> = ({
  children,
  component,
  icon,
  rootStyles,
  ...rest
}) => {
  const { menuItemStyles } = useMenu();

  return (
    <StyledMenuItem rootStyles={rootStyles}>
      <MenuButton component={component} {...rest}>
        {icon && (
          <StyledMenuItemIcon rootStyles={menuItemStyles?.icon}>
            {icon}
          </StyledMenuItemIcon>
        )}
        <StyledMenuItemLabel rootStyles={menuItemStyles?.label}>
          {children}
        </StyledMenuItemLabel>
      </MenuButton>
    </StyledMenuItem>
  );
};

export default MenuItem;
