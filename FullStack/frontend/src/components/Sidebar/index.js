import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcone,
  SidebarLinks,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcone />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="about" onClick={toggle}>
            About
          </SidebarLinks>
          <SidebarLinks to="information" onClick={toggle}>
            Informtion
          </SidebarLinks>
          <SidebarLinks to="crypto" onClick={toggle}>
            Cryptocurrencies
          </SidebarLinks>
          <SidebarLinks to="contact" onClick={toggle}>
            Contact us
          </SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
