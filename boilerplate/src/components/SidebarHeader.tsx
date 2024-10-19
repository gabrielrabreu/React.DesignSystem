import React, { type HTMLAttributes } from "react";
import styled from "@emotion/styled";

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  margin-right: 10px;
  margin-left: 4px;
`;

const StyledName = styled.p`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: #0098e5;
`;

export const SidebarHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledLogo>D</StyledLogo>
        <StyledName>Design System</StyledName>
      </div>
    </StyledSidebarHeader>
  );
};
