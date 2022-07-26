import React from 'react'
import { SidebarContainer, Icon, CloseIcone,SidebarLinks,SidebarMenu,SidebarWrapper  } from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcone />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="/" onClick={toggle}>Home</SidebarLinks>
          <SidebarLinks to="/bitcoin" onClick={toggle}>Bitcoin</SidebarLinks>
          <SidebarLinks to="/eth" onClick={toggle}>Eth</SidebarLinks>
          <SidebarLinks to="/ada" onClick={toggle}>Ada</SidebarLinks>
          <SidebarLinks to="/polkadot" onClick={toggle}>Polkadot</SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar