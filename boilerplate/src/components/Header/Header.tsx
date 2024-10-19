import { type HTMLAttributes, type FC } from "react";

import { StyledHeader, StyledHeaderContainer } from "./Header.styled";

interface HeaderProps extends HTMLAttributes<HTMLHtmlElement> {
  backgroundColor?: string;
}

const Header: FC<HeaderProps> = ({ backgroundColor, children, ...rest }) => {
  return (
    <StyledHeader {...rest}>
      <StyledHeaderContainer backgroundColor={backgroundColor}>
        {children}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
