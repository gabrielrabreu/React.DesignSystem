import {
  type AnchorHTMLAttributes,
  type FC,
  type ReactElement,
  cloneElement,
} from "react";

interface MenuButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ReactElement;
}

const MenuButton: FC<MenuButtonProps> = ({ children, component, ...rest }) => {
  if (component) {
    const { ...props } = component.props;

    return cloneElement(
      component,
      {
        ...rest,
        ...props,
      },
      children
    );
  } else {
    return <a {...rest}>{children}</a>;
  }
};

export default MenuButton;
