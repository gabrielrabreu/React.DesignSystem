import { type ButtonHTMLAttributes, type FC, type ReactNode } from "react";
import { type CSSObject } from "@emotion/styled";

import { StyledIconButton } from "./IconButton.styled";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  rootStyles?: CSSObject;
}

const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  return <StyledIconButton {...rest}>{icon}</StyledIconButton>;
};

export default IconButton;
