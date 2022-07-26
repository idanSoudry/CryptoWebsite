import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" smooth={true.toString()} spy="true" duration={500}>
            Crypto 21
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true.toString()}
                spy={true}
                duration={500}
              >
                About us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="information"
                smooth={true.toString()}
                spy={true}
                exact="true"
                duration={500}
              >
                Informtion
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                exact="true"
                to="crypto"
                smooth={true.toString()}
                spy={true.toString()}
                duration={500}
              >
                Cryptocurrencies
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                exact="true"
                smooth={true.toString()}
                spy={true}
                duration={500}
              >
                Contact us
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
